import React, { Component } from "react";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const { closeUpload, isUploadOpen } = this.props;

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
              src="https://cdn7.bigcommerce.com/s-nmernf2qen/stencil/47bbf000-ea64-0134-d24f-525400dfdca6/images/no-image.svg"
              alt="업로드 이미지"
              className="upload__img"
            />
            <form action className="upload__form">
              <span className="upload__title">사진 업로드</span>
              <span className="upload__close" onClick={closeUpload}>
                ×
              </span>
              <span className="input__label">영화 제목</span>
              <input type="text" className="input" />
              <span className="input__label">이미지 주소</span>
              <input type="text" className="input" />
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
