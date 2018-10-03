import React, { Component } from "react";
import App from "./presenter";

class container extends Component {
  state = {
    photoURL:
      "https://cdn7.bigcommerce.com/s-nmernf2qen/stencil/47bbf000-ea64-0134-d24f-525400dfdca6/images/no-image.svg"
  };

  handlePhotoURL = e => {
    this.setState({
      photoURL: e.target.value
    });
  };

  handleNoPhoto = e => {
    e.target.onerror = null;
    e.target.src =
      "https://cdn7.bigcommerce.com/s-nmernf2qen/stencil/47bbf000-ea64-0134-d24f-525400dfdca6/images/no-image.svg";
  };

  render() {
    return (
      <App
        {...this.props}
        {...this.state}
        handlePhotoURL={this.handlePhotoURL}
        handleNoPhoto={this.handleNoPhoto}
      />
    );
  }
}

export default container;
