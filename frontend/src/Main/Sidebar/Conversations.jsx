import React, { Component } from "react";

export default class Conversation extends Component {
  render() {
    return (
      <div
        className="tab-pane fade show active"
        id="conversations"
        role="tabpanel"
      >
        <div className="top">
          <form>
            <input
              type="search"
              className="form-control"
              placeholder="Search"
            />
            <button type="submit" className="btn prepend">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="eva eva-search"
              >
                <g data-name="Layer 2">
                  <g data-name="search">
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </form>
          <ul className="nav" role="tablist">
            <li>
              <a
                href="#direct"
                className="filter-btn active"
                data-toggle="tab"
                data-filter="direct"
              >
                Direct
              </a>
            </li>
            <li>
              <a
                href="#groups"
                className="filter-btn"
                data-toggle="tab"
                data-filter="groups"
              >
                Groups
              </a>
            </li>
          </ul>
        </div>
        <div className="middle">
          <h4>Discussions</h4>
          <button
            type="button"
            className="btn round"
            data-toggle="modal"
            data-target="#compose"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="eva eva-edit-2"
            >
              <g data-name="Layer 2">
                <g data-name="edit-2">
                  <rect width="24" height="24" opacity="0"></rect>
                  <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"></path>
                  <path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6z"></path>
                </g>
              </g>
            </svg>
          </button>
          <hr />
          <ul className="nav discussions" role="tablist">
          <ul className="nav discussions" role="tablist">
									<li>
										<a href="#chat1" className="filter direct active" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="true" >
											<div className="status online"><img src="/assets/img/avatars/avatar-male-1.jpg" alt="avatar"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path></g></g></svg></div>
											<div className="content">
												<div className="headline">
													<h5>Ham Chuwon</h5>
													<span>Today</span>
												</div>
												<p>Please review and sign the binding agreement.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat1" className="filter direct" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="false" >
											<div className="status offline"><img src="/assets/img/avatars/avatar-male-2.jpg" alt="avatar"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path></g></g></svg></div>
											<div className="content">
												<div className="headline">
													<h5>Quincy Hensen</h5>
													<span>Today</span>
												</div>
												<p>Additional information about the previous clients.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat1" className="filter direct" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="false" >
											<div className="status online"><img src="/assets/img/avatars/avatar-male-3.jpg" alt="avatar"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path></g></g></svg></div>
											<div className="content">
												<div className="headline">
													<h5>Mark Hog</h5>
													<span>Feb 23</span>
												</div>
												<p>I'm looking to get a quote for the move from LA to NY.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat1" className="filter direct" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="false">
											<div className="status offline"><img src="/assets/img/avatars/avatar-male-4.jpg" alt="avatar"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path></g></g></svg></div>
											<div className="content">
												<div className="headline">
													<h5>Sanne Viscaal</h5>
													<span>Jan 18</span>
												</div>
												<p>My delivery address is pending final confirmation.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat1" className="filter direct" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="false" >
											<div className="status offline"><img src="/assets/img/avatars/avatar-male-5.jpg" alt="avatar"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path></g></g></svg></div>
											<div className="content">
												<div className="headline">
													<h5>Alex Just</h5>
													<span>May 2</span>
												</div>
												<p>Sending all the requested insurance documents.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false" style={{display:'none'}}>
											<div className="content">
												<div className="headline">
													<img src="/assets/img/avatars/avatar-group-1.jpg" alt="avatar"/>
													<h5>The Musketeers</h5>
													<span>Today</span>
												</div>
												<p>Please review and sign the binding agreement.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false" style={{display:'none'}}>
											<div className="content">
												<div className="headline">
													<img src="/assets/img/avatars/avatar-group-2.jpg" alt="avatar"/>
													<h5>Watts Up</h5>
													<span>Today</span>
												</div>
												<p>Additional information about the previous clients.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false" style={{display:'none'}}>
											<div className="content">
												<div className="headline">
													<img src="/assets/img/avatars/avatar-group-3.jpg" alt="avatar"/>
													<h5>Memes</h5>
													<span>Feb 23</span>
												</div>
												<p>I'm looking to get a quote for the move from LA to NY.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false" style={{display:'none'}}>
											<div className="content">
												<div className="headline">
													<img src="/assets/img/avatars/avatar-group-4.jpg" alt="avatar"/>
													<h5>Supernovas</h5>
													<span>Jan 18</span>
												</div>
												<p>My delivery address is pending final confirmation.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false" style={{display:'none'}}>
											<div className="content">
												<div className="headline">
													<img src="/assets/img/avatars/avatar-group-5.jpg" alt="avatar"/>
													<h5>Squad Ghouls</h5>
													<span>May 2</span>
												</div>
												<p>Sending all the requested insurance documents.</p>
											</div>
										</a>
									</li>
								</ul>
          </ul>
        </div>
      </div>
    );
  }
}
