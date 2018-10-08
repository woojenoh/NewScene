import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Alert from "react-s-alert";
import Navigation from "../Navigation";
import Feed from "../Feed";
import MyPage from "../MyPage";
import Auth from "../Auth";
import Movie from "../Movie";

import "./styles.css";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/stackslide.css";

export default class presenter extends Component {
  render() {
    const {
      currentUserId,
      posts,
      movies,
      getUser,
      getMovie,
      handleUpload,
      handleProfileUpdate,
      handleLogin,
      handleSignup,
      handleLike,
      handleUnlike,
      handleLogout
    } = this.props;

    const PublicRoutes = () => {
      return (
        <main className="main main--login">
          <Route
            path="/"
            render={() => (
              <Auth handleLogin={handleLogin} handleSignup={handleSignup} />
            )}
          />
          <Alert stack={{ limit: 3 }} />
        </main>
      );
    };

    const PrivateRoutes = () => {
      return (
        <div className="App">
          <Navigation
            user={getUser(currentUserId)}
            posts={posts}
            movies={movies}
            handleUpload={handleUpload}
            handleLogout={handleLogout}
          />
          <main className="main">
            <Route
              exact
              path="/"
              render={() => (
                <Feed
                  currentUser={getUser(currentUserId)}
                  posts={posts}
                  getUser={getUser}
                  getMovie={getMovie}
                  handleLike={handleLike}
                  handleUnlike={handleUnlike}
                />
              )}
            />
            <Route
              path="/mypage"
              render={() => (
                <MyPage
                  currentUser={getUser(currentUserId)}
                  posts={posts}
                  getUser={getUser}
                  getMovie={getMovie}
                  handleProfileUpdate={handleProfileUpdate}
                />
              )}
            />
            <Switch>
              <Route
                path="/movie/:movieId"
                render={({ match }) => (
                  <Movie
                    match={match}
                    currentUser={getUser(currentUserId)}
                    posts={posts}
                    getMovie={getMovie}
                    getUser={getUser}
                    handleLike={handleLike}
                    handleUnlike={handleUnlike}
                  />
                )}
              />
              <Route path="/movie" />
            </Switch>
            <Alert stack={{ limit: 3 }} />
          </main>
        </div>
      );
    };

    return currentUserId === null ? PublicRoutes() : PrivateRoutes();
  }
}
