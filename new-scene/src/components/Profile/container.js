import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    isUpdateOpen: false
  };

  openUpdate = () => {
    this.setState({
      isUpdateOpen: true
    });
  };

  closeUpdate = () => {
    this.setState({
      isUpdateOpen: false
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        openUpdate={this.openUpdate}
        closeUpdate={this.closeUpdate}
      />
    );
  }
}
