import * as React from 'react';
import {
  refProperty,
} from '@pile/shared';

class Inputbody extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  // componentDidMount() {
  //   this.props.autofocus && this.focus();
  // }

  focus=() => {
    this.textInput.current.focus();
  }

  _onblur=(e) => {
    const value = e.target.value;
    this.props.onBlur(value);
  }

  _onfocus=(e) => {
    const value = e.target.value;
    this.props.onFocus(value);
  }

  render() {
    return (
      <input
        {...this.props}
        ref={this.textInput}
        onBlur={this._onblur}
        onFocus={this._onfocus}
      />
    );
  }
}

export default refProperty(Inputbody);
