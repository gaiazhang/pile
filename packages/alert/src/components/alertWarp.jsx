import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AlertBox from './alert';

const defaultState = {
  showIcon: false,
  title: '提示',
  content: '内容',
  show: false,
  btnText: '确定',
  callBack() {},
};

class AlertWarp extends Component {
    state = {
      ...defaultState,
    };

    open =(options) => {
      /* eslint-disable */
      options = options || {};
      options.show = true;
      options.children = options.content;
      delete options.content;
        /* eslint-enable */
      this.setState({
        ...defaultState,
        ...options,
      });
    }

    callBack = () => {
      const { callBack } = this.state;
      if (callBack) {
        callBack();
      }
    }

    close = () => {
      this.setState({
        ...defaultState,
        show: false,
      });
    }

    render() {
      return (
        <AlertBox {...this.state} callBack={this.callBack} />
      );
    }
}
const div = document.createElement('div');
document.body.appendChild(div);
/* eslint-disable */
const alertBox = ReactDOM.render(
  <AlertWarp />,
  div,
);
/* eslint-enable */
export default alertBox;
