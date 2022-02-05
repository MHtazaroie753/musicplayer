import React, { Component } from 'react'

export default class Settings extends Component {
  render() {
    return (
<div className="settings tab-pane fade" id="settings" role="tabpanel">
							<div className="user">
								<label>
									<input type="file"/>
									<img src="/assets/img/avatars/avatar-male-1.jpg" alt="avatar"/>
								</label>
								<div className="content">
									<h5>Ham Chuwon</h5>
									<span>Florida, US</span>
								</div>
							</div>
							<h4>Settings</h4>
							<ul id="preferences">

								<li>
									<a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#account" aria-controls="account">
										<div className="title">
											<h5>Account</h5>
											<p>Update your profile details</p>
										</div>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
									</a>
									<div className="content collapse" id="account" data-parent="#preferences">
										<div className="inside">
											<form className="account">
												<div className="form-row">
													<div className="col-sm-6">
														<div className="form-group">
															<label>First Name</label>
															<input type="text" className="form-control" placeholder="First name" defaultValue="Ham"/>
														</div>
													</div>
													<div className="col-sm-6">
														<div className="form-group">
															<label>Last Name</label>
															<input type="text" className="form-control" placeholder="Last name" defaultValue="Chuwon"/>
														</div>
													</div>
												</div>
												<div className="form-group">
													<label>Email Address</label>
													<input type="email" className="form-control" placeholder="Enter your email address" defaultValue="hamchuwon@gmail.com"/>
												</div>
												<div className="form-group">
													<label>Password</label>
													<input type="password" className="form-control" placeholder="Enter your password" defaultValue="123456"/>
												</div>
												<div className="form-group">
													<label>Biography</label>
													<textarea className="form-control" placeholder="Tell us a little about yourself"></textarea>
												</div>
												<button type="submit" className="btn primary">Save settings</button>
											</form>
										</div>
									</div>
								</li>
								<li>
									<a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#privacy" aria-controls="privacy">
										<div className="title">
											<h5>Privacy &amp; Safety</h5>
											<p>Control your privacy settings</p>
										</div>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
									</a>
									<div className="content collapse" id="privacy" data-parent="#preferences">
										<div className="inside">
											<ul className="options">
												<li>
													<div className="headline">
														<h5>Safe Mode</h5>
														<label className="switch">
															<input type="checkbox" defaultChecked=""/>
															<span className="slider round"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
												<li>
													<div className="headline">
														<h5>History</h5>
														<label className="switch">
															<input type="checkbox" defaultChecked=""/>
															<span className="slider round"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
												<li>
													<div className="headline">
														<h5>Camera</h5>
														<label className="switch">
															<input type="checkbox"/>
															<span className="slider round"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
												<li>
													<div className="headline">
														<h5>Microphone</h5>
														<label className="switch">
															<input type="checkbox"/>
															<span className="slider round"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#alerts" aria-controls="alerts">
										<div className="title">
											<h5>Notifications</h5>
											<p>Turn notifications on or off</p>
										</div>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
									</a>
									<div className="content collapse" id="alerts" data-parent="#preferences">
										<div className="inside">
											<ul className="options">
												<li>
													<div className="headline">
														<h5>Pop-up</h5>
														<label className="switch">
															<input type="checkbox" defaultChecked=""/>
															<span className="slider round"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
												<li>
													<div className="headline">
														<h5>Vibrate</h5>
														<label className="switch">
															<input type="checkbox"/>
															<span className="slider round"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
												<li>
													<div className="headline">
														<h5>Sound</h5>
														<label className="switch">
															<input type="checkbox" defaultChecked=""/>
															<span className="slider round"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
												<li>
													<div className="headline">
														<h5>Lights</h5>
														<label className="switch">
															<input type="checkbox"/>
															<span className="slider round"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
											</ul>
										</div>
									</div>
								</li>

								<li>
									<a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#integrations" aria-controls="integrations">
										<div className="title">
											<h5>Integrations</h5>
											<p>Sync your social accounts</p>
										</div>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
									</a>
									<div className="content collapse" id="integrations" data-parent="#preferences">
										<div className="inside">
											<ul className="integrations">
												<li>
													<button className="btn round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-google"><g data-name="Layer 2"><g data-name="google"><polyline points="0 0 24 0 24 24 0 24" opacity="0"></polyline><path d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93 6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29 10.12 10.12 0 0 0 11.57 22 10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"></path></g></g></svg></button>
													<div className="content">
														<div className="headline">
															<h5>Google</h5>
															<label className="switch">
																<input type="checkbox" defaultChecked=""/>
																<span className="slider round"></span>
															</label>
														</div>
														<span>Read, write, edit</span>
													</div>
												</li>
												<li>
													<button className="btn round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-facebook"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path></g></g></svg></button>
													<div className="content">
														<div className="headline">
															<h5>Facebook</h5>
															<label className="switch">
																<input type="checkbox" defaultChecked=""/>
																<span className="slider round"></span>
															</label>
														</div>
														<span>Read, write, edit</span>
													</div>
												</li>
												<li>
													<button className="btn round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-twitter"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"></polyline><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"></path></g></g></svg></button>
													<div className="content">
														<div className="headline">
															<h5>Twitter</h5>
															<label className="switch">
																<input type="checkbox"/>
																<span className="slider round"></span>
															</label>
														</div>
														<span>No permissions set</span>
													</div>
												</li>
												<li>
													<button className="btn round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-linkedin"><g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"></path><rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9"></rect><circle cx="5.25" cy="5.25" r="2.25"></circle></g></g></svg></button>
													<div className="content">
														<div className="headline">
															<h5>LinkedIn</h5>
															<label className="switch">
																<input type="checkbox"/>
																<span className="slider round"></span>
															</label>
														</div>
														<span>No permissions set</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#appearance" aria-controls="appearance">
										<div className="title">
											<h5>Appearance</h5>
											<p>Customize the look of Swipe</p>
										</div>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
									</a>
									<div className="content collapse" id="appearance" data-parent="#preferences">
										<div className="inside">
											<ul className="options">
												<li>
													<div className="headline">
														<h5>Lights</h5>
														<label className="switch">
															<input type="checkbox"/>
															<span className="slider round mode"></span>
														</label>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</li>
											</ul>
										</div>
									</div>
								</li>
							</ul>
						</div>
    )
  }
}
