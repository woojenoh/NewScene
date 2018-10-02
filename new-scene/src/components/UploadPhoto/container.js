import React, { Component } from "react";
import App from "./presenter";

class container extends Component {
  render() {
    return <App {...this.props} />;
  }
}

export default container;
