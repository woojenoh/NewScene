import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    isUploadOpen: false,
    isSearchOpen: false
  };

  handleNavScroll = nav => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        nav.className = "nav__cols nav__cols--scroll";
      } else {
        nav.className = "nav__cols";
        if (this.state.isSearchOpen) {
          nav.className = "nav__cols nav__cols--scroll";
        }
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

  openSearch = () => {
    this.setState({
      isSearchOpen: true
    });
  };

  closeSearch = () => {
    this.setState({
      isSearchOpen: false
    });
  };

  render() {
    return (
      <App
        handleNavScroll={this.handleNavScroll}
        openUpload={this.openUpload}
        closeUpload={this.closeUpload}
        openSearch={this.openSearch}
        closeSearch={this.closeSearch}
        {...this.state}
        {...this.props}
      />
    );
  }
}
