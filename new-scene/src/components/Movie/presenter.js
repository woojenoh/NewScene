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
      handleUnlike,
      sortPhoto,
      openSort,
      closeSort
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
            <div className="movie__location">
              <span>{targetMovie.location}</span>
              <a
                href={targetMovie.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/images/naver-map.png" alt="" />
              </a>
            </div>
          </div>
          <div className="movie__slider">
            <Slider {...slickSettings}>
              <img src={targetMovie.poster} alt="" />
              {targetMovie.photos.map((photo, index) => {
                return (
                  <div key={index}>
                    <img src={photo} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>

        <section className="movie-post">
          <div className="feed__toggle">
            <span className={sortPhoto ? "" : "selected"} onClick={closeSort}>
              최신순
            </span>
            <span className={sortPhoto ? "selected" : ""} onClick={openSort}>
              인기순
            </span>
          </div>

          <div className="movie-post__content">
            {sortPhoto
              ? posts
                  .filter(targetPost => {
                    return targetPost.movieId === targetMovie.id;
                  })
                  .sort((a, b) => {
                    return b.like - a.like;
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
                  })
              : posts
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
                  })
                  .reverse()}
          </div>
        </section>
      </>
    );
  }
}
