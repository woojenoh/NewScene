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
      handleUnlike
    } = this.props;

    return (
      <section className="feed">
        {posts
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
