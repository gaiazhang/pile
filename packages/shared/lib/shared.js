/*!
 * @pile/shared.js v0.1.0
 * (c) 2018-2019 renmaomin <renmaomin@126.com> (https://github.com/renmm)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'prop-types'], factory) :
  (global = global || self, factory(global['@pile/shared'] = {}, global.PropTypes));
}(this, function (exports, PropTypes) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  var XTINY = 'xtiny';
  var TINY = 'tiny';
  var XSMALL = 'xsmall';
  var SMALL = 'small';
  var XLARGE = 'xlarge';
  var LARGE = 'large';
  var sizes = {
    XTINY: XTINY,
    TINY: TINY,
    XSMALL: XSMALL,
    SMALL: SMALL,
    XLARGE: XLARGE,
    LARGE: LARGE
  };

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

  var curry = function curry(fn) {
    var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 0) {
        throw Error('EMPTY INVOCATION');
      }

      if (args.length >= fn.length - optional) {
        return fn.apply(void 0, args);
      }

      return curry(fn.bind.apply(fn, [null].concat(args)), optional);
    };
  };

  /* eslint-disable no-param-reassign */

  var sizeProperty = curry(function (sizes, defaultSize, Component) {
    if (typeof defaultSize !== 'string') {
      Component = defaultSize;
      defaultSize = null;
    }

    Component.propTypes = _objectSpread({}, Component.propTypes, {
      size: PropTypes.oneOf(sizes)
    });

    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }

    Component.defaultProps.size = defaultSize;
    return Component;
  }, 1);

  /* eslint-disable no-param-reassign */

  var prefixCls = curry(function (ns, Component) {
    if (!Component) {
      Component = ns;
      ns = 'pile';
    }

    Component.propTypes = _objectSpread({}, Component.propTypes, {
      prefixCls: PropTypes.string
    });

    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }

    Component.defaultProps.prefixCls = ns;
    return Component;
  }, 1);

  var compose2 = function compose2(f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  };

  var compose = function compose() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(compose2);
  };

  exports.sizes = sizes;
  exports.sizeProperty = sizeProperty;
  exports.prefixClsProperty = prefixCls;
  exports.compose = compose;
  exports.compose2 = compose2;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=shared.js.map
