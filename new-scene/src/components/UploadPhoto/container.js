import React, { Component } from "react";
import App from "./presenter";
import Alert from "react-s-alert";

class container extends Component {
  state = {
    photoURL: "",
    selectedMovie: "",
    photo: "",
    message: "",
    photoError: true
  };

  handlePhotoURL = e => {
    this.setState({
      photoURL: e.target.value,
      photoError: false
    });
  };

  handleNoPhoto = e => {
    e.target.onerror = null;
    e.target.src = require("../../images/no-photo.svg");
    this.setState({
      photoError: true
    });
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
      Alert.error("영화를 선택하세요.", {
        position: "bottom",
        effect: "stackslide",
        beep: false,
        timeout: 5000
      });
    } else {
      if (this.state.photoError === true) {
        Alert.error("사진 주소를 다시 확인하세요.", {
          position: "bottom",
          effect: "stackslide",
          beep: false,
          timeout: 5000
        });
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
        Alert.success("사진 업로드가 완료됐습니다.", {
          position: "bottom",
          effect: "stackslide",
          beep: false,
          timeout: 5000
        });
      }
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
