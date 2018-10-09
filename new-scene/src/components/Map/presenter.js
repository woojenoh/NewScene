import React, { Component } from "react";
import NaverMap from "react-naver-map";
import { withRouter } from "react-router";

import "./styles.css";

class presenter extends Component {
  render() {
    const { movies, history } = this.props;

    return (
      <>
        <NaverMap
          clientId="HbMpD5qPZ0x4VdtWJgqT"
          style={{
            width: "600px",
            height: "500px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            margin: "0 auto"
          }}
          initialPosition={{ lat: 36.3699872, lng: 127.34595480000007 }}
          initialZoom={7}
          // submodules={["geocoder"]}
        >
          {movies.map(movie => {
            return (
              <NaverMap.Marker
                key={movie.id}
                id={movie.id}
                lat={movie.geo[0]}
                lng={movie.geo[1]}
                onClick={() => {
                  history.push("/movie/" + movie.id);
                }}
                // icon={{
                //   url: movie.poster,
                //   scaledSize: { width: 65, height: 94 }
                // }}
              />
            );
          })}
        </NaverMap>
      </>
    );
  }
}

export default withRouter(presenter);
