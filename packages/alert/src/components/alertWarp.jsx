import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AlertBox from './alert';

const defaultState = {
  alertStatus: false,
  alertTip: '提示',
  alertCon: '内容内容',
  alertShow: false,
  callBack() {},
};

class AlertWarp extends Component {
    state = {
      ...defaultState,
    };

    open =(options) => {
      options = options || {};
      options.alertShow = true;
      this.setState({
        ...defaultState,
        ...options,
      });
    }

    callBack = () => {
      if (this.state.callBack) {
        this.state.callBack();
      }
    }

    close = () => {
      this.setState({
        alertShow: false,
      });
    }

    render() {
      return (
        <AlertBox {...this.state} callBackClose={this.callBack} close={this.close} />
      );
    }
}
const div = document.createElement('div');
document.body.appendChild(div);

const alertBox = ReactDOM.render(
  <AlertWarp />,
  div,
);
export default alertBox;
