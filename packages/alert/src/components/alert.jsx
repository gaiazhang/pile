import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'; // ES6
// import './alert.css';

/* let defaultState = {
  alertStatus: false,
  alertTip: '提示',
  show:true,
  closeAlert: function() {}
}; */

export default class Alert extends Component {
  constructor(props) {
    super(props);
    const obj = {};
    const objs = Object.assign({}, obj, props);
    this.state = objs;
  }

  callBackClose = () => {
    if (this.props.callBackClose) {
      this.props.callBackClose();
    }
  }

  close = () => {
    console.log('88888889x');
    this.props.close();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.alertShow !== this.props.alertShow) {
      this.setState(nextProps);
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
  }

  render() {
    const {
      alertShow, alertStatus, alertTip, alertCon,
    } = this.state;
    return (

      <CSSTransition
          /* component={this.FirstChild} */
        in={alertShow}
        timeout={200}// 动画时长
        classNames="pile-animate"
        unmountOnExit
        onEnter={() => {
          document.body.style.overflow = 'hidden';
          console.log('动画进入完成');
        }}
        onExited={() => {
          document.body.style.overflow = '';
          console.log('动画退出完成');
          this.callBackClose();
        }}
      >
        <div className="pile-dialog">
          <div className="pile_mask" />
          <div className="pile_dialog">
            <p
              className="pile_icon icon-popup_right"
              style={alertStatus ? { display: 'block' } : { display: 'none' }}
            />
            <div className="dialog-alerttitle">{alertTip}</div>
            <div className="dialog-alert-content">
              {alertCon}
            </div>
            <div className="d_btns pile_btn_alert" onClick={this.close}>
              <span className="btn_orange">好的</span>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
