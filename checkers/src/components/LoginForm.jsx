export function LoginForm({ user, setUser, setAppState }) {
  return (
    <form
      id="login-form"
      className="login-form kanit-font"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username } = Object.fromEntries(formData.entries());
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
          className="text-input kanit-font"
          name="password"
          type="password"
          required
        ></input>
      </div>
      <input className="btn kanit-font" type="submit" value="Login" />
      <a
        href=""
        className="register-link"
        onClick={(e) => {
          e.preventDefault();
          setAppState("register");
        }}
      >
        Register...
      </a>
    </form>
  );
}
