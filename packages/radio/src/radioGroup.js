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
import { compose as composed, withState, withHandlers } from 'recompose'

const enhanced = composed(
  withState('selectedValue', 'updateValue', (props) => {
    return props.value
  }),
  withHandlers({
    onClick: props => (item) => event => {
      if (props.disabled || item.disabled) return null
      props.updateValue(item.value)
      props.onChange(item.value)
    }
  })
)

const Radio = enhanced(({
  prefixCls, className, onClick, options, selectedValue, disabled, children, 
  ...props
}) => {
  const cls = classNames({
    [`${prefixCls}-radio`]: true,
    [className]: className,
  });

  if (!options) {
    let opt = []
    React.Children.map(children, child => {
      opt.push({value: child.props.value, label: child.props.children, disabled: child.props.disabled})
    })
    console.log('opt', opt)
    options = opt
  }

  options && options.forEach((item, index) => {
    if (item.value == selectedValue) {
      item.clsicon = classNames({
        [`${prefixCls}-radio-icon`]: true,
        [`${prefixCls}-radio-checked`]: true,
        [`${prefixCls}-radio-disabled`]: disabled || item.disabled,
      });
    } else {
      item.clsicon = classNames({
        [`${prefixCls}-radio-icon`]: true,
        [`${prefixCls}-radio-no`]: true,
        [`${prefixCls}-radio-disabled-no`]: disabled || item.disabled,
      });
    }
  })


  return (
    <div className={cls} >
      {options && options.map( (item, index) => 
        <label className={`${prefixCls}-radio-label`} key={item.value + '' + index} htmlFor={item.value + index} onClick={onClick(item)}>
          <span id={item.value + index} className={item.clsicon}></span>
          <span className={`${prefixCls}-radio-text`}>{item.label}</span>
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

