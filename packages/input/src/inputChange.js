import * as React from 'react';
import PropTypes from 'prop-types';


class InputChange extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const newProps = {
      value: this.state.value,
      onChange: this.handleChange,
    };
    return (
      <div>
        {this.props.render(newProps)}
      </div>
    );
  }
}

export default InputChange;
