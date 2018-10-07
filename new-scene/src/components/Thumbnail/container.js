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
    // 처음 렌더링될 때 img의 width와 height를 받아오지 못하는 경우가 있다.
    // 왜지?
    if (img.width > img.height) {
      let percent = (img.width / img.height) * 100;
      img.style.maxWidth = percent + "%";
      img.style.height = "100%";
    } else if (img.width < img.height) {
      img.style.height = "auto";
      img.style.width = "100%";
    }
    if (img.width === 0 && img.height === 0) {
      img.style.maxWidth = 150 + "%";
      img.style.height = "100%";
      img.style.width = "auto";
    }
  };

  handleScroll = () => {
    if (this.state.isPhotoOpen === true) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
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
        handleScroll={this.handleScroll}
      />
    );
  }
}
