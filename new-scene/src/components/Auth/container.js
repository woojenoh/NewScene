import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    isSignupForm: false
  };

  OpenSignupForm = () => {
    this.setState({
      isSignupForm: true
    });
  };

  CloseSignupForm = () => {
    this.setState({
      isSignupForm: false
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        OpenSignupForm={this.OpenSignupForm}
        CloseSignupForm={this.CloseSignupForm}
      />
    );
  }
}
