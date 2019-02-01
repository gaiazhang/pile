import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  prefixClsProperty,
} from '@pile/shared';


const InputLabel = ({
  prefixCls,
  labelText,
}) => {
  const labelCls = classNames({
    [`${prefixCls}-input-label`]: true,
  });

  return (
    <div className={labelCls}>{labelText}</div>
  );
};

InputLabel.propTypes = {
  labelText: PropTypes.string,
};

InputLabel.defaultProps = {
  labelText: '',
};

export default prefixClsProperty(InputLabel);
