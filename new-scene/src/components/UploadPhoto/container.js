import React, { Component } from "react";
import App from "./presenter";
import nophoto from "../../images/no-photo.svg";

class container extends Component {
  state = {
    photoURL: "",
    selectedMovie: "",
    photo: "",
    message: ""
  };

  handlePhotoURL = e => {
    this.setState({
      photoURL: e.target.value
    });
  };

  handleNoPhoto = e => {
    e.target.onerror = null;
    e.target.src = nophoto;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelectChange = selectedMovie => {
    this.setState({ selectedMovie });
  };

  handleSubmit = e => {
    const { user, handleUpload, closeUpload } = this.props;
    e.preventDefault();
    if (this.state.selectedMovie === "") {
      alert("영화를 선택하세요.");
    } else {
      handleUpload({
        movieId: this.state.selectedMovie.value,
        photo: this.state.photo,
        message: this.state.message,
        userId: user.id,
        like: 0
      });
      this.setState({
        photoURL: "",
        selectedMovie: "",
        photo: "",
        message: ""
      });
      closeUpload();
    }
  };

  render() {
    return (
      <App
        {...this.props}
        {...this.state}
        handlePhotoURL={this.handlePhotoURL}
        handleNoPhoto={this.handleNoPhoto}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleSelectChange={this.handleSelectChange}
      />
    );
  }
}

export default container;
