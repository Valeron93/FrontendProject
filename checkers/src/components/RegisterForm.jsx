import { useState } from "react";
import { getPasswordErrors } from "../util";

export function RegisterForm({ setAppState, user, setUser }) {
  const [passwordErrors, setPasswordErrors] = useState([]);

  return (
    <form
      id="login-form"
      className="login-form kanit-font"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const errors = getPasswordErrors(userData.password);
        if (userData.password !== userData.passwordRepeat) {
          errors.push("Passwords do not match");
        }

        if (errors.length > 0) {
          setPasswordErrors(errors);
          return;
        }

        setPasswordErrors([]);
        const { username } = userData;
        setUser({ ...user, username: username });
        setAppState("play");
      }}
    >
      <div className="login-section">
        Username
        <input
          className="text-input kanit-font"
          name="username"
          required
        ></input>
      </div>

      <div className="login-section">
        Password
        <input
          required
          className="text-input kanit-font"
          name="password"
          type="password"
          onChange={(e) => {
            setPasswordErrors(getPasswordErrors(e.target.value));
          }}
        ></input>
      </div>
      <div className="login-section">
        Repeat password
        <input
          className="text-input kanit-font"
          name="passwordRepeat"
          type="password"
          required
        ></input>
        {passwordErrors.length > 0 &&
          passwordErrors.map((v, i) => {
            return (
              <span className="error-text" key={i}>
                {v}
              </span>
            );
          })}
      </div>
      <input className="btn kanit-font" type="submit" value="Register" />
      <a
        href=""
        className="register-link"
        onClick={(e) => {
          e.preventDefault();
          setAppState("login");
        }}
      >
        Login...
      </a>
    </form>
  );
}
