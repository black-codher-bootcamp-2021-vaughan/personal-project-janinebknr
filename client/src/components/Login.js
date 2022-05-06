import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("login");
  }, []);

  return (
    <div className="container">
      <h1 className="logo-login">Regyster</h1>
      <form id="login-form">
        <label>
          <input type="text" id="username" placeholder="Username" />
        </label>
        <label>
          <input type="password" id="password" placeholder="Password" />
        </label>
        <button type="submit" formaction="/">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
