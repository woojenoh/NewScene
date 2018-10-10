import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  render() {
    return <App {...this.state} {...this.props} />;
  }
}
