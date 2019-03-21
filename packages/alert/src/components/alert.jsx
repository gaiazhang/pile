import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'; // ES6
import classNames from 'classnames';
import { prefixClsProperty } from '@pile/shared';

/* let defaultState = {
  alertStatus: false,
  alertTip: '提示',
  show:true,
  closeAlert: function() {}
}; */

class Alert extends Component {
  constructor(props) {
    super(props);
    const obj = {};
    // const objs = Object.assign({}, obj, props);
    this.state = { show: false };
  }

  componentDidMount() {
    console.log('componentDidMount');
    if (this.props.show) {
      setTimeout(() => {
        this.setState({ show: true });
      }, 0);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { show } = this.state;
    console.log('componentDidUpdate:', nextProps.show !== show);
    if (nextProps.show !== show) {
      console.log('go');
      setTimeout(() => {
        this.setState({ show: true });
      }, 0);
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
  }

  callBackClose = () => {
    const { callBack } = this.props;
    if (callBack) {
      callBack();
    }
  };

  onClose = () => {
    this.setState({
      show: false,
    });
  };

  onKeyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.onClose(e);
    }
  };

  render() {
    let typeIcon = 'success';
    const { showIcon, title, children, btnText, type } = this.props;
    const { show } = this.state;
    const { prefixCls } = this.props;
    const iconCls = classNames({ [`${prefixCls}-alert-icon`]: true });
    if (type === 'success') {
      typeIcon = 'check';
    } else {
      typeIcon = type;
    }
    return (
      <CSSTransition
        in={show}
        timeout={200} // 动画时长
        classNames="pile-alert-animate"
        unmountOnExit
        onEnter={() => {
          document.body.style.overflow = 'hidden';
          console.log('动画进入完成1');
        }}
        onExited={() => {
          document.body.style.overflow = '';
          console.log('动画退出完成2');
          this.callBackClose();
        }}
      >
        <div className="pile-alert">
          <div className="pile-alert-mask" />
          <div className="pile-alert-box">
            <i
              className={`${prefixCls}-icon-${typeIcon} ${iconCls}`}
              style={showIcon ? { display: 'block' } : { display: 'none' }}
            />

            <div className="pile-alert-title">{title}</div>
            {children ? (
              <div className="pile-alert-content">{children}</div>
            ) : null}

            <div
              className="d-btns pile-btn-alert"
              onClick={this.onClose}
              onKeyPress={this.onKeyPress}
            >
              <span className="btn-orange">{btnText}</span>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
/* Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'float']),
  nativeType: PropTypes.oneOf(['button', 'submit', 'reset']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  loading: PropTypes.bool,
  href: PropTypes.string,
  circle: PropTypes.bool,
}; */

Alert.defaultProps = {
  showIcon: false,
  title: '提示',
  content: '内容',
  show: false,
  btnText: '确定',
  callBack() {},
};
export default prefixClsProperty(Alert);
