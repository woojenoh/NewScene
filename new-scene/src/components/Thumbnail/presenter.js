import React, { Component } from "react";
import FeedPhoto from "../FeedPhoto";

import "./styles.css";

class presenter extends Component {
  componentDidMount = () => {
    this.props.handleImgSize(this.img);
  };

  render() {
    const {
      user,
      post,
      movies,
      isPhotoOpen,
      openPhoto,
      closePhoto
    } = this.props;

    return (
      <>
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <div className="thumbnail-centered">
              <img
                className="thumbnail-img"
                src={post.photo}
                alt=""
                ref={ref => {
                  this.img = ref;
                }}
                onClick={openPhoto}
              />
            </div>
          </div>
        </div>
        <div
          className={isPhotoOpen ? "modal" : "modal modal--none"}
          onClick={closePhoto}
        >
          <div
            className={
              isPhotoOpen
                ? "modal__content"
                : "modal__content modal__content--none"
            }
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <FeedPhoto
              post={post}
              user={user}
              movies={movies}
              closePhoto={closePhoto}
            />
          </div>
        </div>
      </>
    );
  }
}

export default presenter;
