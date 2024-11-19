import React from "react";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Here</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i> E-mail
            </label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i> Password
            </label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
