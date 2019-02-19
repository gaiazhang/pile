import * as React from 'react';
import PropTypes from 'prop-types';
import { IfComponent } from '@pile/condition';
import Icon from '@pile/icon';
import {
  prefixClsProperty,
} from '@pile/shared';
import classNames from 'classnames';
import Value from './value';
import Inputbody from './input';

class InputContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focus: props.autoFocus };
    this.textInput = React.createRef();
    this.debounceTimeout = null;
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      window.clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  focus=() => {
    this.textInput.current.focus();
  }

  onBlur=(value) => {
    if (this.textInput) {
      this.debounceTimeout = window.setTimeout(() => {
        if (
          document.activeElement !== (this.textInput && this.textInput.textInput)
        ) {
          this.setState({
            focus: false,
          });
        }
      }, 200);
    }
  }

  onFocus=(value) => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({
      focus: true,
    });
  }

  render() {
    const {
      value,
      onChange,
      clearable,
      prefixCls,
      ...props
    } = this.props;
    const { disabled } = this.props;
    const {
      focus,
    } = this.state;

    const defaultProps = {
      defaultValue: value,
      onChange,
    };
    const inputCls = classNames({
      [`${prefixCls}-input-input`]: true,
    });
    const clearCls = classNames({
      [`${prefixCls}-input-clear`]: true,
      [`${prefixCls}-input-fucos`]: focus,
    });
    return (
      <Value
        {...defaultProps}
      >
        {
        ({ value, set, clear }) => {
          const valueChange = {
            value,
            onChange: set,
          };
          const getClear = () => {
            this.focus();
            clear();
          };
          // alert(clearable && value);

          return (
            <>
              <div className={inputCls}>
                <Inputbody
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                  {...props}
                  {...valueChange}
                  ref={this.textInput}
                />
              </div>
              <IfComponent when={clearable
          && !disabled
          && (`${value}`.length > 0)}
              >
                {
               () => (
                 <div className={clearCls} onClick={getClear}>
                   <Icon type="error-circle" />
                 </div>
               )
              }
              </IfComponent>
            </>
          );
        }
      }
      </Value>
    );
  }
}


export default prefixClsProperty(InputContent);
