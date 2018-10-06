import React, { Component } from "react";
import Thumbnail from "../Thumbnail";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      match,
      currentUser,
      posts,
      getMovie,
      getUser,
      handleLike,
      handleUnlike
    } = this.props;

    const targetMovie = getMovie(match.params.movieId);

    return (
      <>
        <section className="movie">
          <div className="movie__title">
            <span className="movie__name">더 킹</span>
            <span className="movie__location">대전광역시 유성구 대학로 99</span>
          </div>
        </section>

        <section className="movie-post">
          {posts
            .filter(targetPost => {
              return targetPost.movieId === targetMovie.id;
            })
            .map(post => {
              return (
                <Thumbnail
                  key={post.id}
                  post={post}
                  getMovie={getMovie}
                  getUser={getUser}
                  currentUser={currentUser}
                  handleLike={handleLike}
                  handleUnlike={handleUnlike}
                />
              );
            })}
        </section>
      </>
    );
  }
}
