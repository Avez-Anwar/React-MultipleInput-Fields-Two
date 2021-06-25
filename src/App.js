import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      password: ' '
    };
  }
  handleChange = e => {
    const value =
      e.target.name === 'password'
        ? e.target.value.toUpperCase().substr(0, 10)
        : e.target.value;
    this.setState({ [e.target.name]: value });
  };
  render() {
    return (
      <div>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Password: </label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
