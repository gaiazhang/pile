/*!
 * @pile/icon.js v0.1.0
 * (c) 2018-2019 renmaomin <renmaomin@126.com> (https://github.com/renmm)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames'), require('@pile/shared')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames', '@pile/shared'], factory) :
  (global = global || self, global['@pile/icon'] = factory(global.React, global.PropTypes, global.classNames, global.shared));
}(this, function (React, PropTypes, classNames, shared) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

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

  function _extends() {
    _extends = Object.assign || function (target) {
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

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

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

  var Icon = function Icon(_ref) {
    var _classNames;

    var prefixCls = _ref.prefixCls,
        type = _ref.type,
        size = _ref.size,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["prefixCls", "type", "size", "className"]);

    var cls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-icon-").concat(type), true), _defineProperty(_classNames, className, className), _defineProperty(_classNames, size, size), _classNames));
    return React.createElement("i", _extends({
      className: cls
    }, props));
  };

  Icon.propTypes = {
    type: PropTypes.string.isRequired
  };
  var enhance = shared.compose(shared.sizeProperty([shared.sizes.SMALL, shared.sizes.LARGE]), shared.prefixClsProperty);
  var index = enhance(Icon);

  return index;

}));
//# sourceMappingURL=icon.js.map
