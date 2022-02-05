import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import userActions from "../Store/Actions/userActions";
function Register({ registerUser, success, message }) {
  const showSuccessMessage = (
    <div className="row">
      <div className="col">
        <div className="alert alert-success">{message}</div>
      </div>
    </div>
  );
  const showWarningMessage = (
    <div className="row">
      <div className="col">
        <div className="alert alert-success">{message}</div>
      </div>
    </div>
  );
  return (
    <div class="sign">
      <div class="container">
        {success && showSuccessMessage}
        {success == false && showWarningMessage}

        <div class="item">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerUser({
                full_name: document.querySelector("#full_name").value,
                email: document.querySelector("#userEmail").value,
                password: document.querySelector("#userPassword").value,
              });
            }}
          >
            <h2>Sign Up</h2>
            <div class="custom-form-group">
              <input
                id="full_name"
                name="full_name"
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
                id="userEmail"
                name="userEmail"
                type="email"
                class="form-control"
                placeholder="Email Address"
                required=""
              />
              <button class="btn prepend">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="eva eva-email"
                >
                  <g data-name="Layer 2">
                    <g data-name="email">
                      <rect width="24" height="24" opacity="0"></rect>
                      <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <div class="custom-form-group">
              <input
                id="userPassword"
                name="userPassword"
                type="password"
                class="form-control"
                placeholder="Password"
                required=""
                autoComplete="current-password"
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
            <button type="submit" class="custom-btn custom-primary">
              Create account
            </button>
            <span>
              Already a member? <Link to={"/auth/login"}>Sign In.</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
export default connect(
  (state) => {
    return { success: state.users.success, message: state.users.message };
  },
  (dispatch) => {
    return {
      registerUser: (payload) => {
        dispatch({
          type: userActions.USER_REGISTER,
          payload,
        });
      },
    };
  }
)(Register);
