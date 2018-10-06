import React, { Component } from "react";

import "./styles.css";
import clip from "../../images/clip.png";

class presenter extends Component {
  render() {
    const {
      post,
      user,
      movies,
      closePhoto,
      isUserLike,
      handleLike,
      handleUnlike
    } = this.props;

    const movie = movies.filter(movie => {
      return post.movieId === movie.id;
    });

    return (
      <div className="feed__card">
        <div className="card__header">
          <img src={user.profilePhoto} alt="" className="card__header-img" />
          <span className="card__header-name">{user.name}</span>
          <img
            src={clip}
            alt=""
            className={
              isUserLike() ? "card__clip card__clip--liked" : "card__clip"
            }
            onClick={() =>
              isUserLike() ? handleUnlike(post.id) : handleLike(post.id)
            }
          />
          <span className="card__close" onClick={closePhoto}>
            ×
          </span>
        </div>
        <img src={post.photo} alt="" className="card__img" />
        <div className="card__footer">
          <div className="footer__movie">
            <span>
              {movie[0].title}({movie[0].location})
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
