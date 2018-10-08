import React, { Component } from "react";
import FeedPhoto from "../FeedPhoto";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      posts,
      getUser,
      getMovie,
      currentUser,
      handleLike,
      handleUnlike,
      sortPhoto,
      openSort,
      closeSort
    } = this.props;

    return (
      <section className="feed">
        <div className="feed__toggle">
          <span className={sortPhoto ? "" : "selected"} onClick={closeSort}>
            최신순
          </span>
          <span className={sortPhoto ? "selected" : ""} onClick={openSort}>
            인기순
          </span>
        </div>

        {sortPhoto
          ? posts
              .filter(post => {
                return post.userId !== currentUser.id;
              })
              .sort((a, b) => {
                return b.like - a.like;
              })
              .map(post => {
                return (
                  <FeedPhoto
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
          : posts
              .filter(post => {
                return post.userId !== currentUser.id;
              })
              .map(post => {
                return (
                  <FeedPhoto
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
      </section>
    );
  }
}
