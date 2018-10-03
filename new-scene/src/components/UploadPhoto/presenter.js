import React, { Component } from "react";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      closeUpload,
      isUploadOpen,
      photoURL,
      handlePhotoURL,
      handleNoPhoto
    } = this.props;

    return (
      <div
        className={isUploadOpen ? "modal" : "modal modal--none"}
        onClick={closeUpload}
      >
        <div
          className={
            isUploadOpen
              ? "modal__content"
              : "modal__content modal__content-none"
          }
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className="upload">
            <img
              src={photoURL}
              alt="uploaded img"
              className="upload__img"
              onError={handleNoPhoto}
            />
            <form className="upload__form">
              <span className="upload__title">사진 업로드</span>
              <span className="upload__close" onClick={closeUpload}>
                ×
              </span>
              <span className="input__label">영화 제목</span>
              <input type="text" className="input" />
              <span className="input__label">이미지 주소</span>
              <input type="text" className="input" onChange={handlePhotoURL} />
              <span className="input__label">문구</span>
              <input type="text" className="input" />
              <input type="submit" defaultValue="등록" className="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
