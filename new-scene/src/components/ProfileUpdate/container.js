import React, { Component } from "react";
import App from "./presenter";
import Alert from "react-s-alert";

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
    // state는 초기화되나 input이 비워지지 않는 버그가 있음.
    const { user, handleProfileUpdate, closeUpdate } = this.props;
    e.preventDefault();
    if (user.password === this.state.currentPassword) {
      handleProfileUpdate({
        name: this.state.name,
        message: this.state.message,
        profilePhoto: this.state.profilePhoto,
        password: this.state.password
      });
      Alert.success("회원정보가 수정되었습니다.", {
        position: "bottom",
        effect: "stackslide",
        beep: false,
        timeout: 5000
      });
      this.setState({
        currentPassword: "",
        password: ""
      });
      closeUpdate();
    } else {
      Alert.error("현재 비밀번호가 일치하지 않습니다.", {
        position: "bottom",
        effect: "stackslide",
        beep: false,
        timeout: 5000
      });
    }
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
