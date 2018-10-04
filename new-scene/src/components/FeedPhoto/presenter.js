import React, { Component } from "react";
import Ionicon from "react-ionicons";

import "./styles.css";

class presenter extends Component {
  render() {
    const { post, user, movies, closePhoto } = this.props;

    const movie = movies.filter(movie => {
      return post.movieId === movie.id;
    });

    return (
      <div className="feed__card">
        <div className="card__header">
          <img src={user.profilePhoto} alt="" className="card__header-img" />
          <span className="card__header-name">{user.name}</span>
          <span className="card__close" onClick={closePhoto}>
            ×
          </span>
        </div>
        <img src={post.photo} alt="" className="card__img" />
        <div className="card__footer">
          <div className="footer__rating">
            <div className="rating__up">
              <Ionicon icon="md-thumbs-up" fontSize="25px" />
              <span>{post.like}</span>
            </div>
          </div>
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
