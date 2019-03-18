/*!
 * @pile/radio.js v2.0.0
 * (c) 2018-2019 peibiao <peibiao@didichuxing.com>
 * Released under the MIT License.
 */
import { createElement, Children } from 'react';
import 'prop-types';
import classNames from 'classnames';
import { compose as compose$1, sizeProperty, sizes, prefixClsProperty } from '@pile/shared';
import '@pile/condition';
import { compose, withState, withHandlers } from 'recompose';

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

var enhanced = compose(withState('checked', 'updateValue', function (props) {
  return props.checked;
}), withHandlers({
  onClick: function onClick(props) {
    return function (value) {
      return function (event) {
        if (props.disabled) return null;
        props.updateValue(true);
        props.onChange(value);
      };
    };
  }
}));
var Radio = enhanced(function (_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      onClick = _ref.onClick,
      checked = _ref.checked,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      clsicon = _ref.clsicon,
      props = objectWithoutProperties(_ref, ["prefixCls", "className", "onClick", "checked", "disabled", "value", "children", "clsicon"]);

  var cls = classNames((_classNames = {}, defineProperty(_classNames, "".concat(prefixCls, "-radio"), true), defineProperty(_classNames, className, className), _classNames));

  if (!clsicon) {
    if (checked) {
      var _classNames2;

      clsicon = classNames((_classNames2 = {}, defineProperty(_classNames2, "".concat(prefixCls, "-radio-icon"), true), defineProperty(_classNames2, "".concat(prefixCls, "-radio-checked"), true), defineProperty(_classNames2, "".concat(prefixCls, "-radio-disabled"), disabled), _classNames2));
    } else {
      var _classNames3;

      clsicon = classNames((_classNames3 = {}, defineProperty(_classNames3, "".concat(prefixCls, "-radio-icon"), true), defineProperty(_classNames3, "".concat(prefixCls, "-radio-no"), true), defineProperty(_classNames3, "".concat(prefixCls, "-radio-disabled-no"), disabled), _classNames3));
    }
  }

  return createElement("div", {
    className: cls
  }, createElement("label", {
    className: "".concat(prefixCls, "-radio-label"),
    htmlFor: "".concat(prefixCls, "-radio-").concat(value),
    onClick: onClick(value)
  }, createElement("span", {
    id: "".concat(prefixCls, "-radio-").concat(value),
    className: clsicon
  }), createElement("span", {
    className: "".concat(prefixCls, "-radio-text")
  }, children)));
}); // Button.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
//   nativeType: PropTypes.oneOf(['button', 'submit', 'reset']),
//   block: PropTypes.bool,
//   disabled: PropTypes.bool,
//   line: PropTypes.bool,
//   icon: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//   ]),
//   loading: PropTypes.bool,
//   text: PropTypes.bool,
//   href: PropTypes.string,
//   radius: PropTypes.bool,
//   circle: PropTypes.bool,
// };
// Button.defaultProps = {
//   type: 'default',
//   nativeType: 'button',
//   block: false,
//   disabled: false,
//   line: false,
//   icon: null,
//   loading: false,
//   text: false,
//   href: null,
//   radius: true,
//   circle: false,
// };

var enhance = compose$1(sizeProperty([sizes.SMALL, sizes.LARGE]), prefixClsProperty);
var Radio$1 = enhance(Radio);

var enhanced$1 = compose(withState('selectedValue', 'updateValue', function (props) {
  return props.value;
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
var Radio$2 = enhanced$1(function (_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      onClick = _ref.onClick,
      options = _ref.options,
      selectedValue = _ref.selectedValue,
      disabled = _ref.disabled,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["prefixCls", "className", "onClick", "options", "selectedValue", "disabled", "children"]);

  var cls = classNames((_classNames = {}, defineProperty(_classNames, "".concat(prefixCls, "-radio"), true), defineProperty(_classNames, className, className), _classNames));

  if (!options) {
    var opt = [];
    Children.map(children, function (child) {
      opt.push({
        value: child.props.value,
        label: child.props.children,
        disabled: child.props.disabled
      });
    });
    console.log('opt', opt);
    options = opt;
  }

  options && options.forEach(function (item, index) {
    if (item.value == selectedValue) {
      var _classNames2;

      item.clsicon = classNames((_classNames2 = {}, defineProperty(_classNames2, "".concat(prefixCls, "-radio-icon"), true), defineProperty(_classNames2, "".concat(prefixCls, "-radio-checked"), true), defineProperty(_classNames2, "".concat(prefixCls, "-radio-disabled"), disabled || item.disabled), _classNames2));
    } else {
      var _classNames3;

      item.clsicon = classNames((_classNames3 = {}, defineProperty(_classNames3, "".concat(prefixCls, "-radio-icon"), true), defineProperty(_classNames3, "".concat(prefixCls, "-radio-no"), true), defineProperty(_classNames3, "".concat(prefixCls, "-radio-disabled-no"), disabled || item.disabled), _classNames3));
    }
  });
  return createElement("div", {
    className: cls
  }, options && options.map(function (item, index) {
    return createElement("label", {
      className: "".concat(prefixCls, "-radio-label"),
      key: item.value + '' + index,
      htmlFor: item.value + index,
      onClick: onClick(item)
    }, createElement("span", {
      id: item.value + index,
      className: item.clsicon
    }), createElement("span", {
      className: "".concat(prefixCls, "-radio-text")
    }, item.label));
  }));
}); // Button.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
//   nativeType: PropTypes.oneOf(['button', 'submit', 'reset']),
//   block: PropTypes.bool,
//   disabled: PropTypes.bool,
//   line: PropTypes.bool,
//   icon: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//   ]),
//   loading: PropTypes.bool,
//   text: PropTypes.bool,
//   href: PropTypes.string,
//   radius: PropTypes.bool,
//   circle: PropTypes.bool,
// };
// Button.defaultProps = {
//   type: 'default',
//   nativeType: 'button',
//   block: false,
//   disabled: false,
//   line: false,
//   icon: null,
//   loading: false,
//   text: false,
//   href: null,
//   radius: true,
//   circle: false,
// };

var enhance$1 = compose$1(sizeProperty([sizes.SMALL, sizes.LARGE]), prefixClsProperty);
var RadioGroup = enhance$1(Radio$2);

Radio$1.RadioGroup = RadioGroup;
 // export { default as Radio } from './radio';

export default Radio$1;
//# sourceMappingURL=radio.esm.js.map
