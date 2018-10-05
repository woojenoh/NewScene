import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  render() {
    const { username, password, handleChange, handleSubmit } = this.props;

    return (
      <>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            name="username"
            className="input"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={handleChange}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="패스워드"
            value={password}
            onChange={handleChange}
          />
          <input className="submit" type="submit" value="로그인" />
        </form>
      </>
    );
  }
}
