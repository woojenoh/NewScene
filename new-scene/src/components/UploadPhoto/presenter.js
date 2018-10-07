import React, { Component } from "react";
import Select from "react-select";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      closeUpload,
      isUploadOpen,
      photoURL,
      selectedMovie,
      photo,
      message,
      handlePhotoURL,
      handleNoPhoto,
      handleChange,
      handleSubmit,
      movies,
      handleSelectChange
    } = this.props;

    const options = movies.map(movie => {
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
        marginBottom: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.01)"
      }),
      indicatorSeparator: base => ({
        ...base,
        display: "none"
      }),
      dropdownIndicator: base => ({
        ...base,
        display: "none"
      })
    };

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
              alt=""
              className="upload__img"
              onError={handleNoPhoto}
            />
            <form className="upload__form" onSubmit={handleSubmit}>
              <span className="upload__title">사진 업로드</span>
              <span className="upload__close" onClick={closeUpload}>
                ×
              </span>
              <span className="input__label">영화 제목</span>
              {/* <input
                name="movieId"
                type="text"
                className="input"
                onChange={e => handleChange(e)}
                value={movieId}
                required
              /> */}
              <Select
                placeholder="검색"
                styles={customStyles}
                value={selectedMovie}
                onChange={handleSelectChange}
                options={options}
                noOptionsMessage={() => "일치하는 영화가 없습니다."}
                // isOptionSelected={handleHistory}
              />
              <span className="input__label">이미지 주소</span>
              <input
                name="photo"
                type="text"
                className="input"
                onChange={e => {
                  handlePhotoURL(e);
                  handleChange(e);
                }}
                value={photo}
                placeholder="URL"
                required
              />
              <span className="input__label">문구</span>
              <input
                name="message"
                type="text"
                className="input"
                onChange={e => handleChange(e)}
                value={message}
                placeholder="280자 이내"
                maxlength="280"
                required
              />
              <input type="submit" value="업로드" className="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
