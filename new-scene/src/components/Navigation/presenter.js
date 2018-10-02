import React, { Component } from "react";
import Ionicon from "react-ionicons";

import "./styles.css";
import UploadPhoto from "../UploadPhoto";

class presenter extends Component {
  componentDidMount = () => {
    this.props.handleNavScroll(this.nav);
  };

  render() {
    const { openUpload, closeUpload, isUploadOpen } = this.props;

    return (
      <nav className="nav">
        <div
          className="nav__cols"
          ref={ref => {
            this.nav = ref;
          }}
        >
          <div className="nav__col">
            <span className="nav__logo">NewScene</span>
          </div>

          <div className="nav__col">
            <div className="nav__search">
              <input type="text" className="input" placeholder="검색" />
            </div>
          </div>

          <div className="nav__col">
            <div className="nav__menu">
              <Ionicon
                icon="md-camera"
                fontSize="25px"
                color="rgba(0, 0, 0, 0.5)"
                onClick={openUpload}
              />
              <Ionicon
                icon="md-person"
                fontSize="25px"
                color="rgba(0, 0, 0, 0.5)"
              />
            </div>
          </div>
        </div>
        <UploadPhoto isUploadOpen={isUploadOpen} closeUpload={closeUpload} />
      </nav>
    );
  }
}

export default presenter;
