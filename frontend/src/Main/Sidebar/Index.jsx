import React, { Component } from "react";
import Conversations from "./Conversations";
import Friends from "./Friends";
import Notifications from "./Notifications";
import Settings from "./Settings";

export default class Index extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="container">
          <div className="tab-content">
            <Conversations />
            <Friends/>
            <Notifications/>
            <Settings/>
          </div>
        </div>
      </div>
    );
  }
}
