/*!
 * @pile/radio.js v2.0.0
 * (c) 2018-2019 peibiao <peibiao@didichuxing.com>
 * Released under the MIT License.
 */
import { createElement } from 'react';
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

var enhanced = compose(withState('value', 'updateValue', ''), withState('id', 'updateId', ''), withHandlers({
  onChange: function onChange(props) {
    return function (event) {
      props.updateValue(event.target.value);
    };
  }
}));
var Radio = enhanced(function (_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      size = _ref.size,
      value = _ref.value,
      onChange = _ref.onChange,
      props = objectWithoutProperties(_ref, ["prefixCls", "className", "size", "value", "onChange"]);

  var cls = classNames((_classNames = {}, defineProperty(_classNames, "".concat(prefixCls, "-radio"), true), defineProperty(_classNames, className, className), defineProperty(_classNames, "is-".concat(size), size), _classNames));
  return createElement("div", {
    className: cls,
    onClick: onChange
  }, createElement("label", {
    className: "label",
    htmlFor: props.id
  }, createElement("span", {
    id: props.id,
    className: classNames('icon', props.radioType)
  }), props.label + '12344'));
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

// export { default as Radio } from './radio';

export default Radio$1;
//# sourceMappingURL=radio.esm.js.map
