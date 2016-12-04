import React, { PropTypes } from 'react';
import HelloWorld from '../components/HelloWorld.jsx';

export default class HelloWorldContainer extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = { name: this.props.name };
  }

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <HelloWorld name={this.state.name} updateName={(e) => this.updateName(e)} />
      </div>
    );
  }
}
