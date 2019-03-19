import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'; // ES6
import classNames from 'classnames';
import {
  prefixClsProperty,
} from '@pile/shared';

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
    const objs = Object.assign({}, obj, props);
    this.state = objs;
  }


  componentWillReceiveProps(nextProps) {
    const { show } = this.state;
    if (nextProps.show !== show) {
      this.setState(nextProps);
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
  }

  onClose = () => {
    this.setState({
      show: false,
    });
  }

  onKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.onClose(e);
    }
  }

  render() {
    let typeIcon = 'success';
    const {
      show, showIcon, title, children, btnText, type,
    } = this.state;
    const { prefixCls } = this.props;
    const iconCls = classNames({ [`${prefixCls}-alert-icon`]: true });
    if (type === 'success') {
      typeIcon = 'check';
    } else {
      typeIcon = type;
    }
    return (

      <CSSTransition
          /* component={this.FirstChild} */
        in={show}
        timeout={200}// 动画时长
        classNames="pile-alert-animate"
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
        <div className="pile-alert">
          <div className="pile-alert-mask" />
          <div className="pile-alert-box">
            <i className={`${prefixCls}-icon-${typeIcon} ${iconCls}`} style={showIcon ? { display: 'block' } : { display: 'none' }} />

            <div className="pile-alert-title">{title}</div>
            {
              children ? (
                <div className="pile-alert-content">
                  {children}
                </div>
              ) : null
            }
            {/* eslint-disable */}
            <div className="d-btns pile-btn-alert" onClick={this.onClose} onKeyPress={this.onKeyPress}>
              <span className="btn-orange">{btnText}</span>
            </div>
            { /* eslint-enable */}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
export default prefixClsProperty(Alert);
