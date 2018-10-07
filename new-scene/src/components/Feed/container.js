import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    sortPhoto: false
  };

  openSort = () => {
    this.setState({
      sortPhoto: true
    });
  };

  closeSort = () => {
    this.setState({
      sortPhoto: false
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        openSort={this.openSort}
        closeSort={this.closeSort}
      />
    );
  }
}
