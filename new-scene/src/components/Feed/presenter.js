import React, { Component } from "react";
import FeedPhoto from "../FeedPhoto";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const { posts, movies, getUser } = this.props;

    return (
      <section className="feed">
        {posts
          .map(post => {
            const movie = movies.filter(movie => {
              return post.movieId === movie.id;
            });
            return (
              <FeedPhoto
                key={post.id}
                {...post}
                user={getUser(post.userId)}
                title={movie[0].title}
                location={movie[0].location}
              />
            );
          })
          .reverse()}
      </section>
    );
  }
}
