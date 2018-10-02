import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  render() {
    return <App handleNavScroll={this.handleNavScroll} />;
  }

  handleNavScroll = nav => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        nav.className = "nav__cols nav__cols--scroll";
      } else {
        nav.className = "nav__cols";
      }
    });
  };
}
