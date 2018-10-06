import React, { Component } from "react";
import Profile from "../Profile";
import Thumbnail from "../Thumbnail";

import "./styles.css";

class presenter extends Component {
  render() {
    const {
      currentUser,
      posts,
      getUser,
      getMovie,
      handleProfileUpdate
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
          <div className="tab-content">
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
              })}
          </div>
        </section>
      </>
    );
  }
}

export default presenter;
