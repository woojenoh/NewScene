import React, { Component } from "react";
import App from "./presenter";
import { withRouter } from "react-router";

class container extends Component {
  state = {
    isUploadOpen: false,
    isSearchOpen: false,
    selectedMovie: ""
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

  handleChange = selectedMovie => {
    this.setState({ selectedMovie });
  };

  handleHistory = () => {
    const { history } = this.props;
    if (this.state.selectedMovie.value !== undefined) {
      history.push("/movie/" + this.state.selectedMovie.value);
      this.setState({
        selectedMovie: ""
      });
    }
  };

  render() {
    return (
      <App
        handleNavScroll={this.handleNavScroll}
        openUpload={this.openUpload}
        closeUpload={this.closeUpload}
        openSearch={this.openSearch}
        closeSearch={this.closeSearch}
        handleChange={this.handleChange}
        handleHistory={this.handleHistory}
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default withRouter(container);
