import React, { Component } from "react";
import LoginForm from "../LoginForm";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const { handleLogin } = this.props;

    return (
      <>
        <section className="auth">
          <div className="auth__login">
            <img
              src="https://cdn.shopifycloud.com/hatchful-web/assets/313d73fa42f04a46213abc6267b4d074.png"
              alt=""
              className="auth__logo"
            />
            <LoginForm handleLogin={handleLogin} />
            <div className="auth__divider">또는</div>
            <span className="submit submit--naver">네이버로 로그인</span>
          </div>
          <div className="auth__toggle">
            계정이 없으신가요? <span>회원가입</span>
          </div>
        </section>
      </>
    );
  }
}
