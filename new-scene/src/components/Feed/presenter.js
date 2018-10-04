import React, { Component } from "react";
import FeedPhoto from "../FeedPhoto";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const { posts, movies, getUser, currentUser } = this.props;

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
                user={getUser(post.userId)}
                movies={movies}
              />
            );
          })
          .reverse()}
      </section>
    );
  }
}
