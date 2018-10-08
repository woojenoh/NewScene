import React, { Component } from "react";
import App from "./presenter";

class container extends Component {
  state = {
    isClip: false,
    isPoster: false
  };

  openPost = () => {
    this.setState({
      isClip: false,
      isPoster: false
    });
  };

  openClip = () => {
    this.setState({
      isClip: true,
      isPoster: false
    });
  };

  openPoster = () => {
    this.setState({
      isPoster: true,
      isClip: false
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        openPost={this.openPost}
        openClip={this.openClip}
        openPoster={this.openPoster}
      />
    );
  }
}

export default container;
