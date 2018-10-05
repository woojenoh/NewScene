import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { handleLogin } = this.props;
    e.preventDefault();
    handleLogin({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({
      usernsme: "",
      password: ""
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
