import React, { Component } from "react";
import App from "./presenter";

class container extends Component {
  isUserLike = () => {
    const { currentUser, post } = this.props;
    return currentUser.likePosts.includes(post.id);
  };

  render() {
    return <App {...this.props} isUserLike={this.isUserLike} />;
  }
}

export default container;
