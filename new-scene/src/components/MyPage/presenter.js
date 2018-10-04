import React, { Component } from "react";
import Profile from "../Profile";
import Thumbnail from "../Thumbnail";

import "./styles.css";

class presenter extends Component {
  render() {
    const { user, posts, movies, handleProfileUpdate } = this.props;

    return (
      <>
        <section className="profile">
          <Profile user={user} handleProfileUpdate={handleProfileUpdate} />
        </section>
        <section className="profile-post">
          <div className="tab-content">
            {posts
              .filter(post => {
                return post.userId === user.id;
              })
              .map(post => {
                return (
                  <Thumbnail
                    key={post.id}
                    post={post}
                    user={user}
                    movies={movies}
                  />
                );
              })}
          </div>
        </section>
      </>
    );
  }
}

export default presenter;
