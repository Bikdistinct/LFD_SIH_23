import React from "react";
import SignImg from "../../assets/signup.png";
import Google from "../../assets/google.png";
import Apple from "../../assets/apple.png";
import "./signup.css";
function Signup() {
  return (
    <div className="signup">
      <div className="signup-left">
        <div className="signup-top">
          <p>
            Have an account? <span id="signup-signin">Sign In</span>
          </p>
        </div>
        <div className="signup-form">
          <p id="signup-head">Get Started Now</p>
          <div>
            <p>
              {" "}
              <label for="name" className="signup-label">
                Name
              </label>
            </p>
            <input type="text" className="name" placeholder="Enter your name" />
          </div>
          <div>
            <p>
              <label for="email" className="signup-label">
                Email
              </label>
            </p>
            <input
              type="text"
              className="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <p>
              {" "}
              <label for="password" className="signup-label">
                Password
              </label>
            </p>
            <input
              type="text"
              className="password"
              placeholder="Enter your password"
            />
          </div>
          <div class="remember-me--forget-password">
            <input type="checkbox" name="item" />
            <span className="text-checkbox">
              I agree to the <a href="#">terms & policy</a>
            </span>
          </div>
          <div className="signup-btn">Signup</div>
          <div className="signup-or">
            <span id="signup-line-span"></span>
            <span id="signup-text-span">or</span>
            <span id="signup-line-span"></span>
          </div>
          <div className="signup-social">
            <div className="signup-social-icon">
              <img src={Google} /> Sign in with Google
            </div>
            <div className="signup-social-icon">
              <img src={Apple} />
              Sign in with Apple
            </div>
          </div>
        </div>
      </div>
      <div className="signup-right">
        <img src={SignImg} alt="image loading" className="signup-img" />
      </div>
    </div>
  );
}

export default Signup;
