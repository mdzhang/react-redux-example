import React, { PropTypes } from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <h3>
          Hello, {name}!
        </h3>
        <hr />
        <form className="form-horizontal">
          <label htmlFor="nameInput">
            Say hello to:
          </label>
          <input
            type="text"
            name="nameInput"
            value={name}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}
