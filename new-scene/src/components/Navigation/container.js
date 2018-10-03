import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    isUploadOpen: false
  };

  handleNavScroll = nav => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        nav.className = "nav__cols nav__cols--scroll";
      } else {
        nav.className = "nav__cols";
      }
    });
  };

  openUpload = () => {
    this.setState({
      isUploadOpen: true
    });
  };

  closeUpload = () => {
    this.setState({
      isUploadOpen: false
    });
  };

  render() {
    return (
      <App
        handleNavScroll={this.handleNavScroll}
        openUpload={this.openUpload}
        closeUpload={this.closeUpload}
        {...this.state}
      />
    );
  }
}
