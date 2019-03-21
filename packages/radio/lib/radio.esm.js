/*!
 * @pile/radio.js v2.0.0
 * (c) 2018-2019 peibiao <peibiao@didichuxing.com>
 * Released under the MIT License.
 */
import { createElement, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { compose as compose$1, sizeProperty, sizes, prefixClsProperty } from '@pile/shared';
import { compose, withHandlers, withState } from 'recompose';

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

var enhanced = compose(withHandlers({
  onItemClick: function onItemClick(props) {
    return function (value) {
      return function (event) {
        if (props.onClick) return props.onClick();
        if (props.disabled) return null;
        props.onChange(value);
      };
    };
  }
}));

var Radio = function Radio(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      onItemClick = _ref.onItemClick,
      checked = _ref.checked,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      clsicon = _ref.clsicon,
      name = _ref.name,
      vertical = _ref.vertical,
      props = objectWithoutProperties(_ref, ["prefixCls", "className", "onItemClick", "checked", "disabled", "value", "children", "clsicon", "name", "vertical"]);

  var cls = classNames((_classNames = {}, defineProperty(_classNames, "".concat(prefixCls, "-radio"), true), defineProperty(_classNames, "".concat(prefixCls, "-radio-vertical"), vertical), defineProperty(_classNames, className, className), _classNames));

  if (!clsicon) {
    if (checked) {
      var _classNames2;

      clsicon = classNames((_classNames2 = {}, defineProperty(_classNames2, "".concat(prefixCls, "-radio-icon"), true), defineProperty(_classNames2, "".concat(prefixCls, "-radio-checked"), true), defineProperty(_classNames2, "".concat(prefixCls, "-radio-vertical-icon"), vertical), defineProperty(_classNames2, "".concat(prefixCls, "-radio-disabled"), disabled), _classNames2));
    } else {
      var _classNames3;

      clsicon = classNames((_classNames3 = {}, defineProperty(_classNames3, "".concat(prefixCls, "-radio-icon"), true), defineProperty(_classNames3, "".concat(prefixCls, "-radio-no"), true), defineProperty(_classNames3, "".concat(prefixCls, "-radio-vertical-icon"), vertical), defineProperty(_classNames3, "".concat(prefixCls, "-radio-disabled-no"), disabled), _classNames3));
    }
  }

  return createElement("div", {
    className: cls
  }, createElement("label", {
    className: "".concat(prefixCls, "-radio-label"),
    htmlFor: "".concat(prefixCls, "-radio-").concat(value),
    onClick: onItemClick(value)
  }, createElement("input", {
    className: "".concat(prefixCls, "-radio-label-input"),
    value: value,
    defaultChecked: checked,
    type: "radio",
    name: name
  }), createElement("span", {
    id: "".concat(prefixCls, "-radio-").concat(value),
    className: clsicon
  }), createElement("span", {
    className: "".concat(prefixCls, "-radio-text")
  }, children)));
};

Radio.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  vertical: PropTypes.bool
};
Radio.defaultProps = {
  disabled: false,
  checked: false,
  onChange: function onChange() {}
};
var enhance = compose$1(sizeProperty([sizes.SMALL, sizes.LARGE]), prefixClsProperty);
var Radio$1 = enhanced(enhance(Radio));

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

var enhanced$1 = compose(withState('selectedValue', 'updateValue', function (props) {
  return props.defaultValue;
}), withHandlers({
  onClick: function onClick(props) {
    return function (item) {
      return function (event) {
        if (props.disabled || item.disabled) return null;
        props.updateValue(item.value);
        props.onChange(item.value);
      };
    };
  }
}));
var RadioGroup = enhanced$1(function (_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      onClick = _ref.onClick,
      options = _ref.options,
      selectedValue = _ref.selectedValue,
      disabled = _ref.disabled,
      children = _ref.children,
      onChange = _ref.onChange,
      name = _ref.name,
      vertical = _ref.vertical,
      props = objectWithoutProperties(_ref, ["prefixCls", "className", "onClick", "options", "selectedValue", "disabled", "children", "onChange", "name", "vertical"]);

  var cls = classNames((_classNames = {}, defineProperty(_classNames, "".concat(prefixCls, "-radio-group"), true), defineProperty(_classNames, className, className), _classNames));
  options && options.forEach(function (item, index) {
    if (item.value == selectedValue) {
      var _classNames2;

      item.clsicon = classNames((_classNames2 = {}, defineProperty(_classNames2, "".concat(prefixCls, "-radio-icon"), true), defineProperty(_classNames2, "".concat(prefixCls, "-radio-checked"), true), defineProperty(_classNames2, "".concat(prefixCls, "-radio-vertical-icon"), vertical), defineProperty(_classNames2, "".concat(prefixCls, "-radio-disabled"), disabled || item.disabled), _classNames2));
    } else {
      var _classNames3;

      item.clsicon = classNames((_classNames3 = {}, defineProperty(_classNames3, "".concat(prefixCls, "-radio-icon"), true), defineProperty(_classNames3, "".concat(prefixCls, "-radio-no"), true), defineProperty(_classNames3, "".concat(prefixCls, "-radio-vertical-icon"), vertical), defineProperty(_classNames3, "".concat(prefixCls, "-radio-disabled-no"), disabled || item.disabled), _classNames3));
    }
  });
  return createElement("div", {
    className: cls
  }, options && options.map(function (item, index) {
    return createElement(Radio$1, _extends_1({}, item, {
      key: item.value + '' + index,
      onClick: onClick(item),
      onChange: onChange,
      name: name,
      vertical: vertical,
      checked: item.value == selectedValue
    }), item.label);
  }), !options && Children.map(children, function (child) {
    return cloneElement(child, objectSpread({}, child.props, {
      onClick: onClick(child.props),
      onChange: onChange,
      name: name,
      checked: child.props.value == selectedValue
    }));
  }));
});
RadioGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
  options: PropTypes.array
};
RadioGroup.defaultProps = {
  disabled: false,
  onChange: function onChange() {}
};
var enhance$1 = compose$1(sizeProperty([sizes.SMALL, sizes.LARGE]), prefixClsProperty);
var RadioGroup$1 = enhance$1(RadioGroup);

Radio$1.RadioGroup = RadioGroup$1;
 // export { default as Radio } from './radio';

export default Radio$1;
//# sourceMappingURL=radio.esm.js.map
