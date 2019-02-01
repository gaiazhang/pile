import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  prefixClsProperty,
} from '@pile/shared';
import InputChange from './inputChange';


const InputContent = ({
  prefixCls,
  value,
  onChange,
  placeholder,
}) => {
  const inputCls = classNames({
    [`${prefixCls}-input-input`]: true,
  });
  return (
    <div className={inputCls}>
      <InputChange render={valueChange => <input {...props} {...valueChange} />} />
    </div>
  );
};

InputContent.propTypes = {
  labelText: PropTypes.string,
};

InputContent.defaultProps = {
  labelText: '',
};

export default prefixClsProperty(InputContent);
