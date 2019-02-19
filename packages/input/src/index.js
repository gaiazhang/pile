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
  children,
  ...props
}) => {
  const wrapCls = classNames({
    [`${prefixCls}-input-item`]: true,
  });

  return (
    <div className={wrapCls}>
      <InputLabel labeltext={children} />
      <InputContent {...props} />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  placeholder: PropTypes.string,
  clearable: PropTypes.bool,
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};


Input.defaultProps = {
  type: 'text',
  children: '',
  placeholder: '',
  clearable: true,
  name: '',
  autoFocus: false,
  disabled: false,
};

export default prefixClsProperty(Input);
