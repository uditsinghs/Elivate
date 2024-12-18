import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";


const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div>
          <FaCartArrowDown className="cart-icon"/>
        </div>
        <form>
          <div className="input-field">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required className="input"/>
          </div>
          <div className="input-field">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required  className="input"/>
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
