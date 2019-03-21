import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Alert from './alert';

const defaultOpts = {
  showIcon: false,
  title: '提示',
  content: '内容',
  show: false,
  btnText: '确定',
  callBack() {},
};

/* class AlertWarp extends Component {
  state = {
    ...defaultOpts,
  };

  show = options => {
    options = options || {};
    options.show = true;
    options.children = options.content;
    delete options.content;

    this.setState({
      ...defaultOpts,
      ...options,
    });
  };

  callBack = () => {
    const { callBack } = this.state;
    if (callBack) {
      callBack();
    }
  };

  hide = () => {
    this.setState({
      ...defaultOpts,
      show: false,
    });
  };

  render() {
    return <Alert {...this.state} callBack={this.callBack} />;
  }
}
const div = document.createElement('div');
document.body.appendChild(div);

const alertBox = ReactDOM.render(<AlertWarp />, div);

export default alertBox; */

let messageInstance;

const getMessageInstance = function createMessage(opts) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  function destroy() {
    ReactDOM.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
  }
  opts.children = opts.content;
  delete opts.content;
  const props = { ...defaultOpts, ...opts };
  console.log(props, 'opts');
  ReactDOM.render(<Alert {...props} />, div);

  return { destroy };
};

export default {
  show(opts) {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }

    messageInstance = getMessageInstance({ ...opts, show: true });
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
