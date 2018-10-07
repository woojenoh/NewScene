import React, { Component } from "react";

import "./styles.css";
import clip from "../../images/clip.svg";

class presenter extends Component {
  render() {
    const {
      post,
      getUser,
      getMovie,
      closePhoto,
      isUserLike,
      handleLike,
      handleUnlike
    } = this.props;

    const movie = getMovie(post.movieId);
    const user = getUser(post.userId);

    return (
      <div className="feed__card">
        <div className="card__header">
          <img src={user.profilePhoto} alt="" className="card__header-img" />
          <span className="card__header-name">{user.name}</span>
          {typeof handleLike === "function" ? (
            <img
              src={clip}
              alt=""
              className={
                isUserLike() ? "card__clip card__clip--liked" : "card__clip"
              }
              onClick={() => {
                isUserLike() ? handleUnlike(post.id) : handleLike(post.id);
              }}
            />
          ) : (
            ""
          )}
          <span className="card__close" onClick={closePhoto}>
            ×
          </span>
        </div>
        <img src={post.photo} alt="" className="card__img" />
        <div className="card__footer">
          <div className="footer__movie">
            <span>
              {movie.title}({movie.location})
            </span>
          </div>
          <div className="footer__message">
            <span>{post.message}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default presenter;
