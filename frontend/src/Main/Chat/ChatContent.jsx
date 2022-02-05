import React, { Component } from "react";

export default class ChatContent extends Component {
  render() {
    return (
      <div className="middle" id="scroll">
        <div className="container">
          <ul>
            <li>
              <img src="./assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <span>07:30am</span>
              </div>
            </li>
            <li>
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>Many desktop publishing packages.</p>
                  </div>
                </div>
                <span>11:56am</span>
              </div>
            </li>
            <li>
              <img src="./assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <div className="attachment">
                      <a href="#/" className="round">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-file-text"
                        >
                          <g data-name="Layer 2">
                            <g data-name="file-text">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4z"></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                      <div className="meta">
                        <a href="#/">
                          <h5>build-plugins.js</h5>
                        </a>
                        <span>3kb</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span>01:03pm</span>
              </div>
            </li>
            <li>
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>It was popularised in the 1960s.</p>
                  </div>
                </div>
                <span>05:42pm</span>
              </div>
            </li>
            <li>
              <img src="./assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </div>
                <span>08:20pm</span>
              </div>
            </li>
            <li>
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </p>
                  </div>
                </div>
                <span>
                  10:15pm{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="eva eva-done-all"
                  >
                    <g data-name="Layer 2">
                      <g data-name="done-all">
                        <rect width="24" height="24" opacity="0"></rect>
                        <path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z"></path>
                        <path d="M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z"></path>
                        <path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
