import React, { Component } from "react";
import Ionicon from "react-ionicons";

import "./styles.css";

class presenter extends Component {
  render() {
    const {
      username,
      profilePhoto,
      photo,
      message,
      like,
      title,
      location
    } = this.props;

    return (
      <div className="feed__card">
        <div className="card__header">
          <img src={profilePhoto} alt="" className="card__header-img" />
          <span className="card__header-name">{username}</span>
          <span className="card__close">×</span>
        </div>
        <img src={photo} alt="" className="card__img" />
        <div className="card__footer">
          <div className="footer__rating">
            <div className="rating__up">
              <Ionicon icon="md-thumbs-up" fontSize="25px" />
              <span>{like}</span>
            </div>
          </div>
          <div className="footer__movie">
            <span>
              {title}({location})
            </span>
          </div>
          <div className="footer__message">
            <span>{message}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default presenter;
