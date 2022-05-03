import React from "react";

const Login = () => {
  return (
    <div>
      <h1 className="logo-login">Regyster</h1>
      <form>
        <label>
          <input type="text" id="username" placeholder="username" />
        </label>
        <label>
          <input type="password" id="password" placeholder="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
