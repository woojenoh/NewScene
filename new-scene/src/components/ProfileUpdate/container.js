import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    name: this.props.user.name,
    message: this.props.user.message,
    profilePhoto: this.props.user.profilePhoto,
    currentPassword: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { user, handleProfileUpdate, closeUpdate } = this.props;
    e.preventDefault();
    if (user.password === this.state.currentPassword) {
      handleProfileUpdate({
        name: this.state.name,
        message: this.state.message,
        profilePhoto: this.state.profilePhoto,
        password: this.state.password
      });
    } else {
      alert("현재 비밀번호가 일치하지 않습니다.");
    }
    this.setState({
      currentPassword: "",
      password: ""
    });
    closeUpdate();
  };

  render() {
    return (
      <App
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
