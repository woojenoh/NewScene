import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      user,
      isUpdateOpen,
      closeUpdate,
      handleChange,
      handleSubmit,
      name,
      message,
      profilePhoto,
      currentPassword,
      password
    } = this.props;

    return (
      <div
        className={isUpdateOpen ? "modal" : "modal modal--none"}
        onClick={closeUpdate}
      >
        <div
          className={
            isUpdateOpen
              ? "modal__content"
              : "modal__content modal__content-none"
          }
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className="setting">
            <span className="setting__title">프로필 편집</span>
            <span className="setting__close" onClick={closeUpdate}>
              ×
            </span>
            <form className="setting__form" onSubmit={handleSubmit}>
              <span className="input__label">이름</span>
              <input
                name="name"
                type="text"
                className="input"
                value={name}
                defaultValue={user.name}
                onChange={e => handleChange(e)}
                required
              />
              <span className="input__label">소개</span>
              <input
                name="message"
                type="text"
                className="input"
                value={message}
                defaultValue={user.message}
                onChange={e => handleChange(e)}
                required
              />
              <span className="input__label">프로필 사진 주소</span>
              <input
                name="profilePhoto"
                type="text"
                className="input"
                value={profilePhoto}
                defaultValue={user.profilePhoto}
                onChange={e => handleChange(e)}
                required
              />
              <span className="input__label">현재 비밀번호</span>
              <input
                name="currentPassword"
                type="password"
                className="input"
                value={currentPassword}
                onChange={e => handleChange(e)}
                required
              />
              <span className="input__label">변경 비밀번호</span>
              <input
                name="password"
                type="password"
                className="input"
                value={password}
                onChange={e => handleChange(e)}
                required
              />
              <input type="submit" value="변경하기" className="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
