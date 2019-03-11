import classnames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DialogWrap from './DialogWrap';

export default class Modal extends Component {
  /* constructor(props) {
    super(props);
  } */

  renderFooterButton = (button, prefixCls, i) => {
    let buttonStyle = {};
    if (button.style) {
      buttonStyle = button.style;
      if (typeof buttonStyle === 'string') {
        const styleMap = {
          cancel: {},
          default: {},
          destructive: { color: 'red' },
        };
        buttonStyle = styleMap[buttonStyle] || {};
      }
    }

    const onClickFn = (e) => {
      e.preventDefault();
      if (button.onPress) {
        button.onPress();
      }
    };

    return (
      <div className={`${prefixCls}-button`} key={i}>
        {/* eslint-disable  */}
        <a
          className={`${prefixCls}-button`}
          role="button"
          style={buttonStyle}
          onClick={onClickFn}
          onKeyPress={onClickFn}
        >
          {button.text || 'Button'}
        </a>
        { /* eslint-enable */}
      </div>
    );
  }

  render() {
    const {
      prefixCls,
      className,
      wrapClassName,
      style,
      footer = [],
      popup,
      ...restProps
    } = this.props;
    const btnGroupClass = classnames(
      //
      `${prefixCls}-button-group-${footer.length === 2 ? 'h' : 'v'}`,
      `${prefixCls}-button-group-normal`,
    );
    const footerDom = footer.length ? (
      <div className={btnGroupClass}>
        {footer.map((button, i) => this.renderFooterButton(button, prefixCls, i))}
      </div>
    ) : null;
    const wrapCls = classnames(wrapClassName, {
      [`${prefixCls}-wrap-popup`]: popup,
    });
    return (
      <DialogWrap
        {...restProps}
        prefixCls={prefixCls}
        className="pile-modal-transparent"
        wrapClassName={wrapCls}
        transitionName="pile-fade"
        maskTransitionName="pile-fade"
        style={style}
        footer={footerDom}
      />
    );
  }
}

Modal.defaultProps = {
  prefixCls: 'pile-modal',
  onShow() {},
  /* eslint-disable */
  footer: [],
 /*  eslint-enable */

};
Modal.propTypes = {
  /* eslint-disable */
  footer: PropTypes.element.isRequired,
  /*  eslint-enable */
  prefixCls: PropTypes.string,
  onShow: PropTypes.func,

};
// export default WithPortal(Modal);
