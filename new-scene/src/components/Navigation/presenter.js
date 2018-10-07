import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import Select from "react-select";

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
      closeSearch,
      selectedMovie,
      handleChange,
      handleHistory
    } = this.props;

    const options = movies
      .sort((a, b) => {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      })
      .map(movie => {
        return { value: movie.id, label: movie.title };
      });

    const customStyles = {
      option: (base, state) => ({
        ...base,
        padding: "10px 15px",
        fontSize: "15px",
        color: "rgba(0, 0, 0, 0.7)",
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1);" },
        backgroundColor: state.isSelected ? "rgba(0, 0, 0, 0.1);" : "white"
      }),
      control: (base, state) => ({
        ...base,
        height: "32px",
        minHeight: "32px",
        fontSize: "15px",
        color: "rgba(0, 0, 0, 0.7)",
        "&:hover": { boxShadow: "0 0 0 0.1pt rgba(0, 0, 0, 0.5);" },
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "none",
        backgroundColor: "rgba(0, 0, 0, 0.01)"
      }),
      indicatorSeparator: base => ({
        ...base,
        display: "none"
      }),
      dropdownIndicator: base => ({
        ...base,
        display: "none"
      }),
      placeholder: base => ({
        ...base,
        left: 0,
        right: 0,
        textAlign: "center"
      })
    };

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
              <Select
                placeholder="검색"
                styles={customStyles}
                value={selectedMovie}
                onChange={handleChange}
                options={options}
                noOptionsMessage={() => "일치하는 영화가 없습니다."}
                isOptionSelected={handleHistory}
              />
            </div>
          </div>

          <div className="nav__col">
            <div className="nav__menu">
              <Ionicon
                icon="md-search"
                className="search-icon"
                onClick={isSearchOpen ? closeSearch : openSearch}
              />
              <Ionicon icon="md-camera" onClick={openUpload} />
              <Link to="/mypage">
                <Ionicon icon="md-person" color="rgba(0, 0, 0, 0.5)" />
              </Link>
              <Link to="/">
                <Ionicon
                  icon="md-log-out"
                  fontSize="25px"
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
            <Select
              placeholder="검색"
              styles={customStyles}
              value={selectedMovie}
              onChange={handleChange}
              options={options}
              noOptionsMessage={() => "일치하는 영화가 없습니다."}
              isOptionSelected={handleHistory}
            />
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
