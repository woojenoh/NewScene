import React, { Component } from "react";
import NaverMap from "react-naver-map";
import { withRouter } from "react-router";

import "./styles.css";

class presenter extends Component {
  render() {
    const { movies, history, posts, currentUser } = this.props;

    return (
      <section className="map">
        <NaverMap
          clientId="HbMpD5qPZ0x4VdtWJgqT"
          style={{
            width: "600px",
            height: "500px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            margin: "0 auto"
          }}
          initialPosition={{ lat: 36.3504119, lng: 127.38454750000005 }}
          initialZoom={7}
          // submodules={["geocoder"]}
        >
          {movies.map(movie => {
            const isSelected =
              posts
                .filter(post => {
                  return post.movieId === movie.id;
                })
                .filter(post => {
                  return post.userId === currentUser.id;
                })[0] !== undefined;

            const markerUrl = require("../../images/marker/marker" +
              movie.id +
              ".png");

            return (
              <NaverMap.Marker
                key={movie.id}
                id={movie.id}
                lat={movie.geo[0]}
                lng={movie.geo[1]}
                onClick={() => history.push("/movie/" + movie.id)}
                icon={{
                  url: isSelected
                    ? require("../../images/marker/marker-check.png")
                    : markerUrl,
                  scaledSize: { width: 45, height: 45 }
                }}
              />
            );
          })}
        </NaverMap>

        <div className="map__sidebar">
          <div className="sidebar__title">
            <img
              className="sidebar__title-img"
              src="https://upload.wikimedia.org/wikipedia/ko/thumb/b/be/Seal_of_Daejeon.svg/1024px-Seal_of_Daejeon.svg.png"
              alt=""
            />
            <div className="sidebar__title-container">
              <span>대전광역시</span>
              <span>DAEJEON</span>
            </div>
          </div>

          <div className="sidebar__movies">
            {movies.map(movie => {
              return (
                <div
                  key={movie.id}
                  className="sidebar__movie"
                  onClick={() => history.push("/movie/" + movie.id)}
                >
                  <img
                    className="sidebar__movie-img"
                    src={movie.squarePhoto}
                    alt=""
                  />
                  <div className="sidebar__movie-container">
                    <span>
                      {movie.id}. {movie.title}
                    </span>
                    <span>{movie.location}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sidebar__add">새로운 영화 추가</div>
        </div>
      </section>
    );
  }
}

export default withRouter(presenter);
