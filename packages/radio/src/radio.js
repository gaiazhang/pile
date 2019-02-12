import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  compose,
  prefixClsProperty,
  sizeProperty,
  sizes,
} from '@pile/shared';
import { IfComponent } from '@pile/condition';
import { compose as composed, withState, withHandlers, mapProps } from 'recompose'

const enhanced = composed(
  // mapProps((props) => {
  //   return props
  // }),
  withState('selectedValue', 'updateValue', (props) => {
    return props.value
  }),
  withState('id', 'updateId', 'radio'),
  withHandlers({
    onClick: props => value => event => {
      props.updateValue(value)
      props.onChange(value)
    }
  })
)

const Radio = enhanced(({
  prefixCls, className, size, onClick, options, selectedValue,
  ...props
}) => {
  const cls = classNames({
    [`${prefixCls}-radio`]: true,
    [className]: className,
    [`is-${size}`]: size,
  });

  options && options.forEach((item, index) => {
    if (item.value == selectedValue) {
      item.clsicon = classNames({
        [`${prefixCls}-radio-icon`]: true,
        [`${prefixCls}-radio-checked`]: true,
      });
    } else {
      item.clsicon = classNames({
        [`${prefixCls}-radio-icon`]: true,
        [`${prefixCls}-radio-no`]: true,
      });
    }
  })

  return (
    <div className={cls} >
      {options && options.map( (item, index) => 
        <label className="label" key={item.value + '' + index} htmlFor={item.value + index} onClick={onClick(item.value)}>
          <span id={item.value + index} className={item.clsicon}></span>
          <span style={{verticalAlign: 'middle'}}>{item.label}</span>
        </label>
      )}
    </div>)
})

// Button.propTypes = {
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

const enhance = compose(
  sizeProperty([sizes.SMALL, sizes.LARGE]),
  prefixClsProperty,
);

export default enhance(Radio);