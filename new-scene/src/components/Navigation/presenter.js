import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

import "./styles.css";
import UploadPhoto from "../UploadPhoto";

class presenter extends Component {
  componentDidMount = () => {
    this.props.handleNavScroll(this.nav);
  };

  render() {
    const {
      openUpload,
      closeUpload,
      isUploadOpen,
      user,
      posts,
      movies,
      handleUpload,
      handleLogout,
      isSearchOpen,
      openSearch,
      closeSearch
    } = this.props;

    return (
      <nav className="nav">
        <div
          className={
            isSearchOpen
              ? "nav__cols nav__cols--scroll"
              : window.pageYOffset > 50
                ? "nav__cols nav__cols--scroll"
                : "nav__cols"
          }
          ref={ref => {
            this.nav = ref;
          }}
        >
          <div className="nav__col">
            <span className="nav__logo">
              <Link to="/">NewScene</Link>
            </span>
          </div>

          <div className="nav__col">
            <div className="nav__search">
              <input type="text" className="input" placeholder="검색" />
            </div>
          </div>

          <div className="nav__col">
            <div className="nav__menu">
              <Ionicon
                icon="md-search"
                fontSize="25px"
                color="rgba(0, 0, 0, 0.5)"
                className="search-icon"
                onClick={isSearchOpen ? closeSearch : openSearch}
              />
              <Ionicon
                icon="md-camera"
                fontSize="25px"
                color="rgba(0, 0, 0, 0.5)"
                onClick={openUpload}
              />
              <Link to="/mypage">
                <Ionicon
                  icon="md-person"
                  fontSize="25px"
                  color="rgba(0, 0, 0, 0.5)"
                />
              </Link>
              <Link to="/">
                <Ionicon
                  icon="md-log-out"
                  fontSize="25px"
                  color="rgba(0, 0, 0, 0.5)"
                  onClick={() => handleLogout()}
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className={
            isSearchOpen
              ? "nav__search-container"
              : "nav__search-container nav__search-container--none"
          }
        >
          <div className="nav__search">
            <input type="text" className="input" placeholder="검색" />
          </div>
        </div>

        <UploadPhoto
          isUploadOpen={isUploadOpen}
          closeUpload={closeUpload}
          user={user}
          posts={posts}
          movies={movies}
          handleUpload={handleUpload}
        />
      </nav>
    );
  }
}

export default presenter;
