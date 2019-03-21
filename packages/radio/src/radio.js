import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  compose,
  prefixClsProperty,
  sizeProperty,
  sizes,
} from '@pile/shared';
import { compose as composed, withHandlers } from 'recompose'

const enhanced = composed(
  withHandlers({
    onItemClick: props => (value) => event => {
      if (props.onClick) return props.onClick()
      if (props.disabled) return null
      props.onChange(value)
    }
  })
)

const Radio = ({
  prefixCls, className, onItemClick, checked, disabled, value, children, clsicon, name, vertical,
  ...props
}) => {
  const cls = classNames({
    [`${prefixCls}-radio`]: true,
    [`${prefixCls}-radio-vertical`]: vertical,
    [className]: className,
  });
  
  if (!clsicon) {
    if (checked) {
      clsicon = classNames({
        [`${prefixCls}-radio-icon`]: true,
        [`${prefixCls}-radio-checked`]: true,
        [`${prefixCls}-radio-vertical-icon`]: vertical,
        [`${prefixCls}-radio-disabled`]: disabled,
      });
    } else {
      clsicon = classNames({
        [`${prefixCls}-radio-icon`]: true,
        [`${prefixCls}-radio-no`]: true,
        [`${prefixCls}-radio-vertical-icon`]: vertical,
        [`${prefixCls}-radio-disabled-no`]: disabled,
      });
    }
  }

  return (
    <div className={cls} >
      <label className={`${prefixCls}-radio-label`} htmlFor={`${prefixCls}-radio-${value}`} onClick={onItemClick(value)}>
        <input className={`${prefixCls}-radio-label-input`} value={value} defaultChecked={checked} type='radio' name={name} />
        <span id={`${prefixCls}-radio-${value}`} className={clsicon}></span>
        <span className={`${prefixCls}-radio-text`}>{children}</span>
      </label>
    </div>)
}

Radio.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  vertical: PropTypes.bool
};

Radio.defaultProps = {
  disabled: false,
  checked: false,
  onChange: function(){}
};

const enhance = compose(
  sizeProperty([sizes.SMALL, sizes.LARGE]),
  prefixClsProperty,
);

export default enhanced(enhance(Radio));
