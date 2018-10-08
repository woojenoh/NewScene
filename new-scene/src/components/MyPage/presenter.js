import React, { Component } from "react";
import Profile from "../Profile";
import Thumbnail from "../Thumbnail";
import { withRouter } from "react-router";

import "./styles.css";

class presenter extends Component {
  render() {
    const {
      currentUser,
      posts,
      movies,
      getUser,
      getMovie,
      handleProfileUpdate,
      isClip,
      isPoster,
      openPost,
      openClip,
      openPoster,
      handleLike,
      handleUnlike
    } = this.props;

    return (
      <>
        <section className="profile">
          <Profile
            user={currentUser}
            handleProfileUpdate={handleProfileUpdate}
          />
        </section>
        <section className="profile-post">
          <div className="tab-toggle">
            <div className="tab-toggle__container">
              <span
                className={!isClip ? (!isPoster ? "selected" : "") : ""}
                onClick={openPost}
              >
                게시물
              </span>
              <span className={isClip ? "selected" : ""} onClick={openClip}>
                클립
              </span>
            </div>
            <span className={isPoster ? "selected" : ""} onClick={openPoster}>
              마이 무비
            </span>
          </div>

          <div
            className={
              !isClip
                ? !isPoster
                  ? "tab-content selected"
                  : "tab-content"
                : "tab-content"
            }
          >
            {posts
              .filter(post => {
                return post.userId === currentUser.id;
              })
              .map(post => {
                return (
                  <Thumbnail
                    key={post.id}
                    post={post}
                    getUser={getUser}
                    getMovie={getMovie}
                    currentUser={currentUser}
                  />
                );
              })
              .reverse()}
          </div>

          <div className={isClip ? "tab-content selected" : "tab-content"}>
            {posts
              .filter(post => {
                return currentUser.likePosts.includes(post.id);
              })
              .map(post => {
                return (
                  <Thumbnail
                    key={post.id}
                    post={post}
                    getUser={getUser}
                    getMovie={getMovie}
                    currentUser={currentUser}
                    handleLike={handleLike}
                    handleUnlike={handleUnlike}
                  />
                );
              })
              .reverse()}
          </div>

          <div className={isPoster ? "tab-content selected" : "tab-content"}>
            {movies.map(movie => {
              const isSelected =
                posts
                  .filter(post => {
                    return post.movieId === movie.id;
                  })
                  .filter(post => {
                    return post.userId === currentUser.id;
                  })[0] !== undefined;

              const { history } = this.props;

              return (
                <div key={movie.id} className="poster">
                  <img
                    className={
                      isSelected ? "poster__img selected" : "poster__img"
                    }
                    src={movie.poster}
                    alt=""
                    onClick={() => {
                      history.push("/movie/" + movie.id);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(presenter);
