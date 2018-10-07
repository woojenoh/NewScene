import React, { Component } from "react";
import Thumbnail from "../Thumbnail";
import Slider from "react-slick";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      match,
      currentUser,
      posts,
      getMovie,
      getUser,
      handleLike,
      handleUnlike
    } = this.props;

    const targetMovie = getMovie(match.params.movieId);

    const slickSettings = {
      arrows: false,
      dots: true,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <section className="movie">
          <div className="movie__title">
            <span className="movie__name">{targetMovie.title}</span>
            <span className="movie__location">{targetMovie.location}</span>
          </div>
          <div className="movie__slider">
            <Slider {...slickSettings}>
              <img src={targetMovie.poster} alt="" />
              {targetMovie.photos.map(photo => {
                return (
                  <div>
                    <img src={photo} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>

        <section className="movie-post">
          {posts
            .filter(targetPost => {
              return targetPost.movieId === targetMovie.id;
            })
            .map(post => {
              return (
                <Thumbnail
                  key={post.id}
                  post={post}
                  getMovie={getMovie}
                  getUser={getUser}
                  currentUser={currentUser}
                  handleLike={handleLike}
                  handleUnlike={handleUnlike}
                />
              );
            })}
        </section>
      </>
    );
  }
}
