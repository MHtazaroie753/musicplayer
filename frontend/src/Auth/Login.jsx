import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "../Store/Actions/userActions";

function Login({ doLogin, success, message, isUserLoggedIn, user_status }) {
  const showMessage = (
    <div className="row">
      <div className="col">
        <div className="alert alert-danger">{message}</div>
      </div>
    </div>
  );
  return (
    <>
      {console.log("login" + isUserLoggedIn)}
      {user_status == 2 && isUserLoggedIn && <Redirect to={"/dashboard"} />}
      {user_status == 1 && isUserLoggedIn && <Redirect to={"/"} />}

      {/* {isUserLoggedIn && <Redirect to={"/dashboard"}/>} */}
      <div class="sign">
        <div class="container">
          {success == false && showMessage}
          <div class="item">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                doLogin({
                  email: document.querySelector("#email").value,
                  password: document.querySelector("#password").value,
                });
              }}
            >
              <h2>Login</h2>
              <div class="custom-form-group">
                <input
                  id="email"
                  name="email"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  required=""
                  autofocus=""
                />
                <button class="btn prepend">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="eva eva-person"
                  >
                    <g data-name="Layer 2">
                      <g data-name="person">
                        <rect width="24" height="24" opacity="0"></rect>
                        <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path>
                        <path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="custom-form-group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required=""
                />
                <button class="btn prepend">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="eva eva-lock"
                  >
                    <g data-name="Layer 2">
                      <g data-name="lock">
                        <rect width="24" height="24" opacity="0"></rect>
                        <circle cx="12" cy="15" r="1"></circle>
                        <path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <a href="#">Forgot Password?</a>
              <button type="submit" class="custom-btn custom-primary">
                Sign In
              </button>
              <span>
                Don't have account?{" "}
                <Link to={"/auth/register"}>Create Account.</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(
  (state) => {
    return {
      success: state.main.success,
      message: state.main.message,
      user_status: state.main.user_status,
      isUserLoggedIn: state.main.isUserLoggedIn,
    };
  },
  (dispatch) => {
    return {
      doLogin: (payload) => dispatch({ type: userActions.USER_LOGIN, payload }),
    };
  }
)(Login);
