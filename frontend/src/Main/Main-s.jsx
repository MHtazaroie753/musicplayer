import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "./partials/Loader";
import Navigation from "./Navigation/Navigation";
import Index from "./Sidebar/Index";
import Chat from "./Chat";
import LocationService from "../Services/LocationService";
import PeerService from "../Services/PeerService";
import mainActions from "../Store/Actions/mainActions";
class Main extends Component {
  constructor(props) {
    super(props);
    this.LocationService = new LocationService();
    this.PeerService = new PeerService();
  }
  componentDidMount(){
    this.props.init();
  }
  getMainRender() {
    return (
      <React.Fragment>
        <Navigation />
        <Index />
        <Chat />
      </React.Fragment>
    );
  }
  render() {
    const renderItems = this.props.isInit ? (
      <Loader/>
    ) : (
      this.getMainRender()
    );
    return <div className="layout">{renderItems}</div>;
  }
}

export default connect(
  (state) => ({
    isInit: state.main.isInit,
  }),
  (dispatch) => {
    return {
      init: () => {
        dispatch({ type: mainActions.INIT_REQUESTED, payload:null});
      },
    };
  }
)(Main);
