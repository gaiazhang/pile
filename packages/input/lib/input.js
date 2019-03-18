/*!
 * @pile/input.js v2.0.0
 * (c) 2018-2019 huangping <huangping@didichuxing.com>
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var shared = require('@pile/shared');
var condition = require('@pile/condition');
var Icon = _interopDefault(require('@pile/icon'));

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

var InputLabel = function InputLabel(_ref) {
  var prefixCls = _ref.prefixCls,
      labeltext = _ref.labeltext;
  var labelCls = classNames(defineProperty({}, "".concat(prefixCls, "-input-label"), true));
  return React.createElement("div", {
    className: labelCls
  }, labeltext);
};

InputLabel.propTypes = {
  labeltext: PropTypes.string
};
InputLabel.defaultProps = {
  labeltext: ''
};
var InputLabel$1 = shared.prefixClsProperty(InputLabel);

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

// import {
//   prefixClsProperty,
// } from '@pile/shared';
// import classNames from 'classnames';

var Value =
/*#__PURE__*/
function (_React$Component) {
  inherits(Value, _React$Component);

  function Value(_props) {
    var _this;

    classCallCheck(this, Value);

    _this = possibleConstructorReturn(this, getPrototypeOf(Value).call(this, _props)); // this._set = this._set.bind(this);
    //  this.handleClear = this.handleClear.bind(this);

    defineProperty(assertThisInitialized(_this), "_set", function (e) {
      var ctrlValue = e.target.value;

      _this.setState({
        value: ctrlValue
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(ctrlValue);
      }
    });

    defineProperty(assertThisInitialized(_this), "_reset", function () {
      _this.setState({
        value: props.defaultValue
      });
    });

    defineProperty(assertThisInitialized(_this), "_clear", function () {
      _this.setState({
        value: ''
      });
    });

    _this.state = {
      value: _props.defaultValue || ''
    };
    return _this;
  } // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps.defaultValue);
  //   console.log(prevState.value);
  //   if (nextProps.defaultValue != prevState.value) {
  //     return { value: nextProps.defaultValue };
  //   }
  //   return null;
  // }


  createClass(Value, [{
    key: "render",
    value: function render() {
      // const { prefixCls } = this.props;
      var newProps = {
        value: this.state.value,
        set: this._set,
        clear: this._clear,
        reset: this._reset
      };
      return this.props.children(newProps) // <React.Fragment>
      //   <div className={`${prefixCls}-input-input`}>
      //     {this.props.render(newProps)}
      //   </div>
      //   <div className={`${prefixCls}-input-clear`} onClick={this.handleClear}>
      //     <Icon type="error-circle" />
      //   </div>
      // </React.Fragment>
      ;
    }
  }]);

  return Value;
}(React.Component); // export default prefixClsProperty(InputChange);

var Inputbody =
/*#__PURE__*/
function (_React$Component) {
  inherits(Inputbody, _React$Component);

  function Inputbody(props) {
    var _this;

    classCallCheck(this, Inputbody);

    _this = possibleConstructorReturn(this, getPrototypeOf(Inputbody).call(this, props));

    defineProperty(assertThisInitialized(_this), "focus", function () {
      _this.textInput.current.focus();
    });

    defineProperty(assertThisInitialized(_this), "_onblur", function (e) {
      var value = e.target.value;

      _this.props.onBlur(value);
    });

    defineProperty(assertThisInitialized(_this), "_onfocus", function (e) {
      var value = e.target.value;

      _this.props.onFocus(value);
    });

    _this.textInput = React.createRef();
    return _this;
  } // componentDidMount() {
  //   this.props.autofocus && this.focus();
  // }


  createClass(Inputbody, [{
    key: "render",
    value: function render() {
      return React.createElement("input", _extends_1({}, this.props, {
        ref: this.textInput,
        onBlur: this._onblur,
        onFocus: this._onfocus
      }));
    }
  }]);

  return Inputbody;
}(React.Component);

var Inputbody$1 = shared.refProperty(Inputbody);

var InputContent =
/*#__PURE__*/
function (_React$Component) {
  inherits(InputContent, _React$Component);

  function InputContent(props) {
    var _this;

    classCallCheck(this, InputContent);

    _this = possibleConstructorReturn(this, getPrototypeOf(InputContent).call(this, props));

    defineProperty(assertThisInitialized(_this), "focus", function () {
      _this.textInput.current.focus();
    });

    defineProperty(assertThisInitialized(_this), "onBlur", function (value) {
      if (_this.textInput) {
        _this.debounceTimeout = window.setTimeout(function () {
          if (document.activeElement !== (_this.textInput && _this.textInput.textInput)) {
            _this.setState({
              focus: false
            });
          }
        }, 200);
      }
    });

    defineProperty(assertThisInitialized(_this), "onFocus", function (value) {
      if (_this.debounceTimeout) {
        clearTimeout(_this.debounceTimeout);
        _this.debounceTimeout = null;
      }

      _this.setState({
        focus: true
      });
    });

    _this.state = {
      focus: props.autoFocus
    };
    _this.textInput = React.createRef();
    _this.debounceTimeout = null;
    return _this;
  }

  createClass(InputContent, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        window.clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2,
          _this2 = this;

      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange,
          clearable = _this$props.clearable,
          prefixCls = _this$props.prefixCls,
          props = objectWithoutProperties(_this$props, ["value", "onChange", "clearable", "prefixCls"]);

      var disabled = this.props.disabled;
      var focus = this.state.focus;
      var defaultProps = {
        defaultValue: value,
        onChange: onChange
      };
      var inputCls = classNames(defineProperty({}, "".concat(prefixCls, "-input-input"), true));
      var clearCls = classNames((_classNames2 = {}, defineProperty(_classNames2, "".concat(prefixCls, "-input-clear"), true), defineProperty(_classNames2, "".concat(prefixCls, "-input-fucos"), focus), _classNames2));
      return React.createElement(Value, defaultProps, function (_ref) {
        var value = _ref.value,
            set = _ref.set,
            clear = _ref.clear;
        var valueChange = {
          value: value,
          onChange: set
        };

        var getClear = function getClear() {
          _this2.focus();

          clear();
        }; // alert(clearable && value);


        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: inputCls
        }, React.createElement(Inputbody$1, _extends_1({
          onBlur: _this2.onBlur,
          onFocus: _this2.onFocus
        }, props, valueChange, {
          ref: _this2.textInput
        }))), React.createElement(condition.IfComponent, {
          when: clearable && !disabled && "".concat(value).length > 0
        }, function () {
          return React.createElement("div", {
            className: clearCls,
            onClick: getClear
          }, React.createElement(Icon, {
            type: "error-circle"
          }));
        }));
      });
    }
  }]);

  return InputContent;
}(React.Component);

var InputContent$1 = shared.prefixClsProperty(InputContent);

var Input = function Input(_ref) {
  var prefixCls = _ref.prefixCls,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["prefixCls", "children"]);

  var wrapCls = classNames(defineProperty({}, "".concat(prefixCls, "-input-item"), true));
  return React.createElement("div", {
    className: wrapCls
  }, React.createElement(InputLabel$1, {
    labeltext: children
  }), React.createElement(InputContent$1, props));
};

Input.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  placeholder: PropTypes.string,
  clearable: PropTypes.bool,
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
  disabled: PropTypes.bool
};
Input.defaultProps = {
  type: 'text',
  children: '',
  placeholder: '',
  clearable: true,
  name: '',
  autoFocus: false,
  disabled: false
};
var index = shared.prefixClsProperty(Input);

module.exports = index;
//# sourceMappingURL=input.js.map
