import React, { Component } from "react";
import ChatTopBar from "./ChatTopBar";
import ChatContent from "./ChatContent";
import ChatForm from "./ChatForm";
export default class ChatItem extends Component {
  render() {
    return (
      <div className="tab-pane fade active show" id="chat1" role="tabpanel">
        <div className="item">
          <div className="content">
            <ChatTopBar />
            <ChatContent />
            <ChatForm />
          </div>

          <div className="utility">
            <div className="container">
              <button type="button" className="close" data-utility="open">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="eva eva-close"
                >
                  <g data-name="Layer 2">
                    <g data-name="close">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                    </g>
                  </g>
                </svg>
              </button>
              <button
                type="button"
                className="btn primary"
                data-toggle="modal"
                data-target="#compose"
              >
                Add people
              </button>
              <ul className="nav" role="tablist">
                <li>
                  <a
                    href="#users"
                    className="active"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="users"
                    aria-selected="true"
                  >
                    Users
                  </a>
                </li>
                <li>
                  <a
                    href="#files"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="files"
                    aria-selected="false"
                  >
                    Files
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="users"
                  role="tabpanel"
                >
                  <h4>Users</h4>
                  <hr />
                  <ul className="users">
                    <li>
                      <div className="status online">
                        <img
                          src="./assets/img/avatars/avatar-male-1.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Ham Chuwon</h5>
                        <span>Florida, US</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="status offline">
                        <img
                          src="./assets/img/avatars/avatar-male-2.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Quincy Hensen</h5>
                        <span>Shanghai, China</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="status online">
                        <img
                          src="./assets/img/avatars/avatar-male-3.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Mark Hog</h5>
                        <span>Olso, Norway</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="status offline">
                        <img
                          src="./assets/img/avatars/avatar-male-4.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Sanne Viscaal</h5>
                        <span>Helena, Montana</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="status offline">
                        <img
                          src="./assets/img/avatars/avatar-male-5.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Alex Just</h5>
                        <span>London, UK</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="status online">
                        <img
                          src="./assets/img/avatars/avatar-male-6.jpg"
                          alt="avatar"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="eva eva-radio-button-on"
                        >
                          <g data-name="Layer 2">
                            <g data-name="radio-button-on">
                              <rect width="24" height="24" opacity="0"></rect>
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                              <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Arturo Thomas</h5>
                        <span>Vienna, Austria</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="files" role="tabpanel">
                  <h4>Files</h4>
                  <div className="upload">
                    <label>
                      <input type="file" />
                      <span>Drag &amp; drop files here</span>
                    </label>
                  </div>
                  <ul className="files">
                    <li>
                      <ul className="avatars">
                        <li>
                          <button className="btn round">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="eva eva-file-text"
                            >
                              <g data-name="Layer 2">
                                <g data-name="file-text">
                                  <rect
                                    width="24"
                                    height="24"
                                    opacity="0"
                                  ></rect>
                                  <path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4z"></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <a href="#/">
                            <img
                              src="./assets/img/avatars/avatar-male-1.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="meta">
                        <a href="#/">
                          <h5>workbox.js</h5>
                        </a>
                        <span>2kb</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <ul className="avatars">
                        <li>
                          <button className="btn round">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="eva eva-folder"
                            >
                              <g data-name="Layer 2">
                                <g data-name="folder">
                                  <rect
                                    width="24"
                                    height="24"
                                    opacity="0"
                                  ></rect>
                                  <path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43z"></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <a href="#/">
                            <img
                              src="./assets/img/avatars/avatar-male-2.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="meta">
                        <a href="#/">
                          <h5>bug_report</h5>
                        </a>
                        <span>1kb</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <ul className="avatars">
                        <li>
                          <button className="btn round">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="eva eva-briefcase"
                            >
                              <g data-name="Layer 2">
                                <g data-name="briefcase">
                                  <rect
                                    width="24"
                                    height="24"
                                    opacity="0"
                                  ></rect>
                                  <path d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4z"></path>
                                  <path d="M19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3z"></path>
                                  <path d="M5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <a href="#/">
                            <img
                              src="./assets/img/avatars/avatar-male-3.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="meta">
                        <a href="#/">
                          <h5>nuget.zip</h5>
                        </a>
                        <span>7mb</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <ul className="avatars">
                        <li>
                          <button className="btn round">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="eva eva-image-2"
                            >
                              <g data-name="Layer 2">
                                <g data-name="image-2">
                                  <rect
                                    width="24"
                                    height="24"
                                    opacity="0"
                                  ></rect>
                                  <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 7zm11 10.83A1.09 1.09 0 0 1 18 19H6l7.57-6.82a.69.69 0 0 1 .93 0l4.5 4.48z"></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <a href="#/">
                            <img
                              src="./assets/img/avatars/avatar-male-4.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="meta">
                        <a href="#/">
                          <h5>clearfix.jpg</h5>
                        </a>
                        <span>1kb</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <ul className="avatars">
                        <li>
                          <button className="btn round">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="eva eva-folder"
                            >
                              <g data-name="Layer 2">
                                <g data-name="folder">
                                  <rect
                                    width="24"
                                    height="24"
                                    opacity="0"
                                  ></rect>
                                  <path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43z"></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <a href="#/">
                            <img
                              src="./assets/img/avatars/avatar-male-5.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="meta">
                        <a href="#/">
                          <h5>package</h5>
                        </a>
                        <span>4mb</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <ul className="avatars">
                        <li>
                          <button className="btn round">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="eva eva-file-text"
                            >
                              <g data-name="Layer 2">
                                <g data-name="file-text">
                                  <rect
                                    width="24"
                                    height="24"
                                    opacity="0"
                                  ></rect>
                                  <path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4z"></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <a href="#/">
                            <img
                              src="./assets/img/avatars/avatar-male-6.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="meta">
                        <a href="#/">
                          <h5>plugins.js</h5>
                        </a>
                        <span>3kb</span>
                      </div>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="eva eva-more-vertical"
                          >
                            <g data-name="Layer 2">
                              <g data-name="more-vertical">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(-90 12 12)"
                                  opacity="0"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <circle cx="12" cy="5" r="2"></circle>
                                <circle cx="12" cy="19" r="2"></circle>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button type="button" className="dropdown-item">
                            Edit
                          </button>
                          <button type="button" className="dropdown-item">
                            Share
                          </button>
                          <button type="button" className="dropdown-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
