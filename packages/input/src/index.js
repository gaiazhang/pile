import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  prefixClsProperty,
} from '@pile/shared';
import InputLabel from './inputlabel';
import InputContent from './inputContent';


const Input = ({
  prefixCls,
  type,
  children,
  placeholder,
}) => {
  const wrapCls = classNames({
    [`${prefixCls}-input-item`]: true,
  });
  const labelCls = classNames({
    [`${prefixCls}-input-label`]: true,
  });
  const inputCls = classNames({
    [`${prefixCls}-input-input`]: true,
  });
  return (
    <div className={wrapCls}>
      <InputLabel labelText={children} />
      <InputContent {...props} />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  children: '',
  placeholder: '',
};

export default prefixClsProperty(Input);
