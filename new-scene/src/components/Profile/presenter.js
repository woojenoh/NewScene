import React, { Component } from "react";
import Ionicon from "react-ionicons";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="profile__columns">
        <div className="profile__column">
          <img src={user.profilePhoto} alt="" className="profile__pic" />
        </div>
        <div className="profile__column">
          <span className="profile__name">
            {user.username}
            <Ionicon icon="md-settings" className="profile__setting" />
          </span>
          <div className="profile__count">
            게시물
            <span className="profile__count-post"> {user.postCount}</span>
            저장
            <span className="profile__count-like"> {user.likeCount}</span>
          </div>
          <div className="profile__introduce">{user.message}</div>
        </div>
      </div>
    );
  }
}
