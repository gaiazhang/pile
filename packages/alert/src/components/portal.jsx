import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './alert';

function noop() {}

const IS_REACT_16 = !!ReactDOM.createPortal;

const CAN_USE_DOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default class DialogWrap extends React.Component {
  static defaultProps = {
    visible: false,
    prefixCls: 'rmc-dialog',
    onClose: noop,
  };

  componentDidMount() {
    if (this.props.visible) {
      this.componentDidUpdate();
    }
  }

  shouldComponentUpdate({ visible }) {
    return !!(this.props.visible || visible);
  }

  componentWillUnmount() {
    if (this.props.visible) {
      if (!IS_REACT_16) {
        this.renderDialog(false);
      } else {
        this.removeContainer();
      }
    } else {
      this.removeContainer();
    }
  }

  componentDidUpdate() {
    if (!IS_REACT_16) {
      this.renderDialog(this.props.visible);
    }
  }

  saveRef = node => {
    if (IS_REACT_16) {
      this._component = node;
    }
  };

  getComponent = visible => {
    const props = { ...this.props };
    return (
      <Alert
        {...props}
        visible={visible}
        onAnimateLeave={this.removeContainer}
        ref={this.saveRef}
      />
    );
  };

  removeContainer = () => {
    if (this.container) {
      if (!IS_REACT_16) {
        ReactDOM.unmountComponentAtNode(this.container);
      }
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  };

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div');
      const containerId = `pile-alert-container-${new Date().getTime()}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
  };

  renderDialog(visible) {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.getComponent(visible),
      this.getContainer()
    );
  }

  render() {
    if (!CAN_USE_DOM) {
      return null;
    }

    const { visible } = this.props;
    if (IS_REACT_16 && (visible || this._component)) {
      return ReactDOM.createPortal(
        this.getComponent(visible),
        this.getContainer()
      );
    }
    return null;
  }
}
