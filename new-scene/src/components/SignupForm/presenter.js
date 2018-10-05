import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  render() {
    const { username, name, password, handleChange, handleSubmit } = this.props;

    return (
      <form className="signup__form" onSubmit={handleSubmit}>
        <input
          name="username"
          className="input"
          type="text"
          placeholder="아이디"
          value={username}
          onChange={handleChange}
          required
        />
        <input
          name="name"
          className="input"
          type="text"
          placeholder="성명"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          className="input"
          type="password"
          placeholder="패스워드"
          value={password}
          onChange={handleChange}
          required
        />
        <input className="submit" type="submit" value="회원가입" />
      </form>
    );
  }
}
