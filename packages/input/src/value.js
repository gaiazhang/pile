import * as React from 'react';
import PropTypes from 'prop-types';
// import Icon from '@pile/icon';
// import {
//   prefixClsProperty,
// } from '@pile/shared';
// import classNames from 'classnames';

class Value extends React.Component {
  constructor(props) {
    super(props);
    // this._set = this._set.bind(this);
    //  this.handleClear = this.handleClear.bind(this);
    this.state = { value: props.defaultValue || '' };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps.defaultValue);
  //   console.log(prevState.value);
  //   if (nextProps.defaultValue != prevState.value) {
  //     return { value: nextProps.defaultValue };
  //   }
  //   return null;
  // }

  _set=(e) => {
    const ctrlValue = e.target.value;
    this.setState({
      value: ctrlValue,
    });
    const { onChange } = this.props;
    if (onChange) {
      onChange(ctrlValue);
    }
  }

  _reset=() => {
    this.setState({
      value: props.defaultValue,
    });
  }

  _clear=() => {
    this.setState({
      value: '',
    });
  }

  render() {
    // const { prefixCls } = this.props;
    const newProps = {
      value: this.state.value,
      set: this._set,
      clear: this._clear,
      reset: this._reset,
    };
    return (this.props.children(newProps)
    // <React.Fragment>
    //   <div className={`${prefixCls}-input-input`}>
    //     {this.props.render(newProps)}
    //   </div>
    //   <div className={`${prefixCls}-input-clear`} onClick={this.handleClear}>
    //     <Icon type="error-circle" />
    //   </div>
    // </React.Fragment>
    );
  }
}

// export default prefixClsProperty(InputChange);
export default Value;
