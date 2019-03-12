/*!
 * @pile/alert.js v2.0.0
 * (c) 2018-2019 zhangzhipeng <zhangzhipeng@didichuxing.com>
 * Released under the MIT License.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Animate from 'rc-animate';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

var RenderBox =
/*#__PURE__*/
function (_Component) {
  inherits(RenderBox, _Component);

  function RenderBox() {
    classCallCheck(this, RenderBox);

    return possibleConstructorReturn(this, getPrototypeOf(RenderBox).apply(this, arguments));
  }

  createClass(RenderBox, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.end) {
        this.props.end();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;

      var props = objectSpread({}, this.props);

      delete props.hiddenClassName;
      delete props.visible;
      props.className = className;
      return React.createElement("div", props, props.children);
    }
  }]);

  return RenderBox;
}(Component);

defineProperty(RenderBox, "propTypes", {
  children: PropTypes.any,
  visible: PropTypes.bool
});

defineProperty(RenderBox, "defaultProps", {
  visible: true
});

function noop() {}

var Dialog =
/*#__PURE__*/
function (_Component) {
  inherits(Dialog, _Component);

  function Dialog(_props) {
    var _this;

    classCallCheck(this, Dialog);

    _this = possibleConstructorReturn(this, getPrototypeOf(Dialog).call(this, _props));

    defineProperty(assertThisInitialized(_this), "getDialogElement", function () {
      var props = _this.props;
      var closable = props.closable;
      var prefixCls = props.prefixCls;
      var footer;

      if (props.footer) {
        footer = React.createElement("div", {
          className: "".concat(prefixCls, "-footer"),
          ref: function ref(el) {
            return _this.footerRef = el;
          }
        }, props.footer);
      }

      var header;

      if (props.title) {
        header = React.createElement("div", {
          className: "".concat(prefixCls, "-header"),
          ref: function ref(el) {
            return _this.headerRef = el;
          }
        }, React.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, props.title));
      }

      var closer;

      if (closable) {
        closer = React.createElement("button", {
          onClick: _this.close,
          "aria-label": "Close",
          className: "".concat(prefixCls, "-close")
        }, React.createElement("span", {
          className: "".concat(prefixCls, "-close-x")
        }));
      }

      var transitionName = _this.getTransitionName();

      var dialogElement = React.createElement(RenderBox, {
        key: "dialog-element",
        role: "document",
        ref: function ref(el) {
          return _this.dialogRef = el;
        },
        style: props.style || {},
        className: "".concat(prefixCls, " ").concat(props.className || ''),
        visible: props.visible
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, closer, header, React.createElement("div", {
        className: "".concat(prefixCls, "-body"),
        style: props.bodyStyle,
        ref: function ref(el) {
          return _this.bodyRef = el;
        }
      }, props.children), footer)); // https://github.com/react-component/animate 动画库

      return React.createElement(Animate, {
        key: "dialog",
        showProp: "visible",
        onAppear: _this.onAnimateAppear,
        onLeave: _this.onAnimateLeave,
        transitionName: transitionName,
        component: "",
        transitionAppear: true
      }, dialogElement);
    });

    defineProperty(assertThisInitialized(_this), "onAnimateAppear", function () {
      // console.log('动画过度开始')
      document.body.style.overflow = 'hidden';
    });

    defineProperty(assertThisInitialized(_this), "onAnimateLeave", function () {
      // console.log('动画结束的时候执行')
      document.body.style.overflow = '';

      if (_this.wrapRef) {
        _this.wrapRef.style.display = 'none';
      }

      if (_this.props.onAnimateLeave) {
        _this.props.onAnimateLeave();
      }

      if (_this.props.afterClose) {
        _this.props.afterClose();
      }
    });

    defineProperty(assertThisInitialized(_this), "close", function (e) {
      if (_this.props.onClose) {
        _this.props.onClose(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onMaskClick", function (e) {
      if (e.target === e.currentTarget) {
        _this.close(e);
      }
    });

    _this.getMaskTransitionName = _this.getMaskTransitionName.bind(assertThisInitialized(_this));
    _this.getTransitionName = _this.getTransitionName.bind(assertThisInitialized(_this));
    _this.getTransitionName = _this.getTransitionName.bind(assertThisInitialized(_this));
    _this.getMaskElement = _this.getMaskElement.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Dialog, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.overflow = '';

      if (this.wrapRef) {
        this.wrapRef.style.display = 'none';
      }
    }
  }, {
    key: "getMaskTransitionName",
    value: function getMaskTransitionName() {
      var props = this.props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;

      if (!transitionName && animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(animation);
      }

      return transitionName;
    }
  }, {
    key: "getTransitionName",
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      console.log(transitionName, 'transitionName');
      var animation = props.animation;

      if (!transitionName && animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(animation);
      }

      return transitionName;
    }
  }, {
    key: "getMaskElement",
    value: function getMaskElement() {
      var props = this.props;
      var maskElement;

      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = React.createElement(RenderBox, _extends_1({
          key: "mask-element",
          className: "".concat(props.prefixCls, "-mask"),
          hiddenClassName: "".concat(props.prefixCls, "-mask-hidden"),
          visible: props.visible
        }, props.maskProps));

        if (maskTransition) {
          maskElement = React.createElement(Animate, {
            key: "mask",
            showProp: "visible",
            transitionAppear: true,
            component: "",
            transitionName: maskTransition
          }, maskElement);
        }
      }

      return maskElement;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var prefixCls = props.prefixCls,
          maskClosable = props.maskClosable;
      return React.createElement("div", null, this.getMaskElement(), React.createElement("div", _extends_1({
        className: "".concat(prefixCls, "-wrap ").concat(props.wrapClassName || ''),
        ref: function ref(el) {
          return _this2.wrapRef = el;
        },
        onClick: maskClosable ? this.onMaskClick : undefined,
        role: "dialog",
        "aria-labelledby": props.title
      }, props.wrapProps), this.getDialogElement()));
    }
  }]);

  return Dialog;
}(Component);
Dialog.defaultProps = {
  afterClose: noop,
  className: '',
  mask: true,
  visible: false,
  closable: true,
  maskClosable: true,
  prefixCls: 'pile-dialog',
  onClose: noop
};
Dialog.propTypes = {
  afterClose: PropTypes.func,
  className: PropTypes.string,
  mask: PropTypes.bool,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  prefixCls: PropTypes.string,
  onClose: PropTypes.func
};

var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var DialogWrap =
/*#__PURE__*/
function (_Component) {
  inherits(DialogWrap, _Component);

  function DialogWrap(_props) {
    var _this;

    classCallCheck(this, DialogWrap);

    _this = possibleConstructorReturn(this, getPrototypeOf(DialogWrap).call(this, _props));

    defineProperty(assertThisInitialized(_this), "saveRef", function (node) {
      _this._component = node;
    });

    defineProperty(assertThisInitialized(_this), "getComponent", function (visible) {
      var props = objectSpread({}, _this.props);

      return React.createElement(Dialog, _extends_1({}, props, {
        visible: visible,
        onAnimateLeave: _this.removeContainer,
        ref: _this.saveRef
      }));
    });

    defineProperty(assertThisInitialized(_this), "removeContainer", function () {
      if (_this.container) {
        _this.container.parentNode.removeChild(_this.container);

        _this.container = null;
      }
    });

    defineProperty(assertThisInitialized(_this), "getContainer", function () {
      if (!_this.container) {
        var container = document.createElement('div');
        var containerId = "".concat(_this.props.prefixCls, "-container-").concat(new Date().getTime());
        container.setAttribute('id', containerId);
        document.body.appendChild(container);
        _this.container = container;
      }

      return _this.container;
    });

    return _this;
  }

  createClass(DialogWrap, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref) {
      var visible = _ref.visible;
      return !!(this.props.visible || visible);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: "render",
    value: function render() {
      if (!CAN_USE_DOM) {
        return null;
      }

      var visible = this.props.visible;

      if (visible || this._component) {
        return ReactDOM.createPortal(this.getComponent(visible), this.getContainer());
      }

      return null;
    }
  }]);

  return DialogWrap;
}(Component);
DialogWrap.defaultProps = {
  visible: false,
  prefixCls: 'pile-modal',
  onClose: function onClose() {}
};
DialogWrap.propTypes = {
  visible: PropTypes.bool,
  prefixCls: PropTypes.string,
  onClose: PropTypes.func
};

var Modal =
/*#__PURE__*/
function (_Component) {
  inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    classCallCheck(this, Modal);

    _this = possibleConstructorReturn(this, getPrototypeOf(Modal).call(this, props));
    _this.renderFooterButton = _this.renderFooterButton.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Modal, [{
    key: "renderFooterButton",
    value: function renderFooterButton(button, prefixCls, i) {
      var buttonStyle = {};

      if (button.style) {
        buttonStyle = button.style;

        if (typeof buttonStyle === 'string') {
          var styleMap = {
            cancel: {},
            default: {},
            destructive: {
              color: 'red'
            }
          };
          buttonStyle = styleMap[buttonStyle] || {};
        }
      }

      var onClickFn = function onClickFn(e) {
        e.preventDefault();

        if (button.onPress) {
          button.onPress();
        }
      };

      return React.createElement("div", {
        className: "".concat(prefixCls, "-button"),
        key: i
      }, React.createElement("a", {
        className: "".concat(prefixCls, "-button"),
        role: "button",
        style: buttonStyle,
        onClick: onClickFn
      }, button.text || 'Button'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          wrapClassName = _this$props.wrapClassName,
          style = _this$props.style,
          _this$props$footer = _this$props.footer,
          footer = _this$props$footer === void 0 ? [] : _this$props$footer,
          popup = _this$props.popup,
          restProps = objectWithoutProperties(_this$props, ["prefixCls", "className", "wrapClassName", "style", "footer", "popup"]);

      var btnGroupClass = classnames( //
      "".concat(prefixCls, "-button-group-").concat(footer.length === 2 ? 'h' : 'v'), "".concat(prefixCls, "-button-group-normal"));
      var footerDom = footer.length ? React.createElement("div", {
        className: btnGroupClass
      }, footer.map(function (button, i) {
        return _this2.renderFooterButton(button, prefixCls, i);
      })) : null;
      var wrapCls = classnames(wrapClassName, defineProperty({}, "".concat(prefixCls, "-wrap-popup"), popup));
      return React.createElement(DialogWrap, _extends_1({}, restProps, {
        prefixCls: prefixCls,
        className: "pile-modal-transparent",
        wrapClassName: wrapCls,
        transitionName: "pile-fade",
        maskTransitionName: "pile-fade",
        style: style,
        footer: footerDom
      }));
    }
  }]);

  return Modal;
}(Component);
Modal.defaultProps = {
  prefixCls: 'pile-modal',
  style: {},
  onShow: function onShow() {},
  footer: [],
  closable: false
};
Modal.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  onShow: PropTypes.func,
  footer: PropTypes.array
}; // export default WithPortal(Modal);

function alert(title, message) {
  var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{
    text: '确定'
  }];
  var closed = false;

  if (!title && !message) {
    // 有信息 -- 不执行关闭函数
    return {
      close: function close() {}
    };
  }

  var div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div); // 销毁指定容器内的所有React节点

    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  var footer = actions.map(function (button) {
    // 按钮组执行函数
    var orginPress = button.onPress || function () {};

    button.onPress = function () {
      if (closed) {
        return;
      }

      var res = orginPress();

      if (res && res.then) {
        res.then(function () {
          closed = true;
          close();
        }).catch(function () {});
      } else {
        closed = true;
        close();
      }
    };

    return button;
  });
  var prefixCls = 'pile-modal';
  ReactDOM.render(React.createElement(Modal, {
    visible: true,
    title: title,
    transitionName: "pile-fade",
    closable: false,
    maskClosable: false,
    footer: footer,
    maskTransitionName: "pile-fade"
  }, React.createElement("div", {
    className: "".concat(prefixCls, "-alert-content")
  }, message)), div);
  return {
    close: close
  };
}
/* ----API
visible  对话框是否可见	Boolean	false
onClose  点击 x 或 mask 回调	(): void	无
title (only transparent)	标题	React.Element	无
closable	是否显示关闭按钮	Boolean	true
maskClosable (only transparent)	点击蒙层是否允许关闭	Boolean	true
footer (only not transparent)	底部内容	Array [{text, onpress}]	[]
transparent	是否弹窗模式	Boolean	false
wrapClassName 新增弹窗样式 String

==========================================================

Modal.alert(title, message, actions?) ( 适用平台：WEB、React-Native )#
参数	说明	类型	默认值
title	标题	String 或 React.Element	无
message	提示信息	String 或 React.Element	无
actions	按钮组, [{text, onpress, style}]	Array	无

*/

Modal.alert = alert;
Modal.prompt = alert;

export default Modal;
//# sourceMappingURL=alert.esm.js.map
