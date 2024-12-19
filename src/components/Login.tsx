import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const Login = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div>
          <FaCartArrowDown className="cart-icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <FaUser className="icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="input"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="input"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className="login-btn" type="submit">
            LOGIN
          </button>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
