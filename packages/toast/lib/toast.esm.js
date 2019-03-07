/*!
 * @pile/toast.js v0.1.0
 * (c) 2018-2019 wutaosusan <wutaosusan@didichuxing.com>
 * Released under the MIT License.
 */
import { cloneElement, Component, createElement } from 'react';
import PropTypes from 'prop-types';
import Icon from '@pile/icon';
import ReactDOM from 'react-dom';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var IS_REACT_16 = !!ReactDOM.createPortal;

var DialogWrap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DialogWrap, _React$Component);

  function DialogWrap(props) {
    _classCallCheck(this, DialogWrap);

    return _possibleConstructorReturn(this, _getPrototypeOf(DialogWrap).call(this, props));
  }

  _createClass(DialogWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.componentDidUpdate();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!IS_REACT_16 && this.props.visible) {
        this.renderDialog(this.props.visible);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.visible) {
        if (!IS_REACT_16) {
          this.renderDialog(false);
        } else {
          // TODO for react@16 createPortal animation
          this.removeContainer();
        }
      } else {
        this.removeContainer();
      }
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      if (!this.container) {
        var container = document.createElement('div');
        var containerId = "pile-container-".concat(new Date().getTime());
        container.setAttribute('id', containerId);
        document.body.appendChild(container);
        this.container = container;
      }

      return this.container;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      var props = this.props;
      return cloneElement(props.children, _objectSpread({
        onAnimateLeave: this.removeContainer.bind(this)
      }, props));
    }
  }, {
    key: "removeContainer",
    value: function removeContainer() {
      if (this.container) {
        if (!IS_REACT_16) {
          ReactDOM.unmountComponentAtNode(this.container);
        }

        this.container.parentNode.removeChild(this.container);
        this.container = null;
        var onClose = this.props.onClose;

        if (onClose) {
          onClose();
        }
      }
    }
  }, {
    key: "renderDialog",
    value: function renderDialog() {
      ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getComponent(), this.getContainer());
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.props.visible;

      if (IS_REACT_16 && visible) {
        return ReactDOM.createPortal(this.getComponent(), this.getContainer());
      }

      return null;
    }
  }]);

  return DialogWrap;
}(Component);

var ToastContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToastContent, _React$Component);

  function ToastContent() {
    _classCallCheck(this, ToastContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToastContent).apply(this, arguments));
  }

  _createClass(ToastContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          duration = _this$props.duration,
          content = _this$props.content,
          iconType = _this$props.iconType;

      if (duration !== prevProps.duration || content !== prevProps.content || iconType !== prevProps.iconType) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "close",
    value: function close() {
      this.clearCloseTimer(); // 执行关闭操作
      // this.props.onAnimateLeave();
    }
  }, {
    key: "startCloseTimer",
    value: function startCloseTimer() {
      var _this = this;

      var duration = this.props.duration;

      if (duration) {
        this.closeTimer = setTimeout(function () {
          _this.close();
        }, duration * 1000);
      }
    }
  }, {
    key: "clearCloseTimer",
    value: function clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          content = _this$props2.content,
          iconType = _this$props2.iconType;
      return createElement("div", {
        className: "pile-toast"
      }, iconType ? createElement(Icon, {
        type: "check-circle",
        size: "large"
      }) : null, createElement("div", {
        className: "pile-toast-content"
      }, content));
    }
  }]);

  return ToastContent;
}(Component);

var Toast = function Toast(props) {
  return createElement(DialogWrap, props, createElement(ToastContent, null));
};

Toast.propTypes = {
  content: PropTypes.string,
  iconType: PropTypes.oneOf(['success', 'fail', 'load', '']),
  duration: PropTypes.number,
  visible: PropTypes.bool,
  onClose: PropTypes.func
};
Toast.defaultProps = {
  content: '',
  iconType: '',
  duration: 3,
  visible: false,
  onClose: null
};

// export { default as Mask } from './mask';

export { Toast };
