import React, { Component } from "react";
import Profile from "../Profile";

import "./styles.css";

class presenter extends Component {
  render() {
    const { user, posts, movies } = this.props;

    return (
      <section className="profile">
        <Profile user={user} />
      </section>
    );
  }
}

export default presenter;
