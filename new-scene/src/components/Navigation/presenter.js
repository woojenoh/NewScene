import React, { Component } from "react";
import "./styles.css";
import Ionicon from "react-ionicons";

class presenter extends Component {
  componentDidMount = () => {
    this.props.handleNavScroll(this.nav);
  };

  render() {
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
              />
              <Ionicon
                icon="md-person"
                fontSize="25px"
                color="rgba(0, 0, 0, 0.5)"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default presenter;
