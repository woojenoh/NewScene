import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    isPhotoOpen: false
  };

  openPhoto = () => {
    this.setState({
      isPhotoOpen: true
    });
  };

  closePhoto = () => {
    this.setState({
      isPhotoOpen: false
    });
  };

  handleImgSize = img => {
    if (img.width > img.height) {
      let percent = (img.width / img.height) * 100;
      img.style.maxWidth = percent + "%";
    }
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        openPhoto={this.openPhoto}
        closePhoto={this.closePhoto}
        handleImgSize={this.handleImgSize}
      />
    );
  }
}
