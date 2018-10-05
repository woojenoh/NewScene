import React, { Component } from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      isSignupForm,
      OpenSignupForm,
      CloseSignupForm,
      handleLogin,
      handleSignup
    } = this.props;

    return (
      <>
        <section className="auth">
          <div className={isSignupForm ? "auth__signup" : "auth__login"}>
            <img
              src="https://cdn.shopifycloud.com/hatchful-web/assets/313d73fa42f04a46213abc6267b4d074.png"
              alt=""
              className="auth__logo"
            />

            {isSignupForm ? (
              <span className="submit submit--naver">네이버로 로그인</span>
            ) : (
              ""
            )}

            {isSignupForm ? <div className="auth__divider">또는</div> : ""}

            {isSignupForm ? (
              <SignupForm handleSignup={handleSignup} />
            ) : (
              <LoginForm handleLogin={handleLogin} />
            )}

            {isSignupForm ? "" : <div className="auth__divider">또는</div>}

            {isSignupForm ? (
              ""
            ) : (
              <span className="submit submit--naver">네이버로 로그인</span>
            )}
          </div>

          <div className="auth__toggle">
            {isSignupForm ? "계정이 있으신가요?" : "계정이 없으신가요?"}
            <span
              onClick={() =>
                isSignupForm ? CloseSignupForm() : OpenSignupForm()
              }
            >
              {isSignupForm ? "로그인" : "회원가입"}
            </span>
          </div>
        </section>
      </>
    );
  }
}
