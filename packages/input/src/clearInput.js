import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from '@pile/icon';
import {
  prefixClsProperty,
} from '@pile/shared';
import classNames from 'classnames';

class InputClear extends React.Component {
  constructor(props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
    this.state = { value: props.value || props.defaultValue || '' };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps.defaultValue);
  //   console.log(prevState.value);
  //   if (nextProps.defaultValue != prevState.value) {
  //     return { value: nextProps.defaultValue };
  //   }
  //   return null;
  // }

  handleClear() {
    this.setState({
      value: '',
    });
  }

  render() {
    // const { prefixCls } = this.props;
    const newProps = {
      value: this.state.value,
    };
    return (
      <React.Fragment>
        {this.props.render(newProps)}
        <div className={`${prefixCls}-input-clear`} onClick={this.handleClear}>
          <Icon type="error-circle" />
        </div>
      </React.Fragment>
    );
  }
}

export default prefixClsProperty(InputClear);
