import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    username: "",
    name: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { handleSignup } = this.props;
    e.preventDefault();
    handleSignup({
      username: this.state.username,
      name: this.state.name,
      password: this.state.password
    });
    this.setState({
      username: "",
      name: "",
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
