import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "./partials/Loader";
import Navigation from "./Navigation/Navigation";
import Index from "./Sidebar/Index";
import Chat from "./Chat";
import mainActions from "../Store/Actions/mainActions";
import { Redirect } from "react-router-dom";
function Main({ isUserLoggedIn, init, isInit }) {
  useEffect(() => {
    init();
  });
  const getMainRender = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center ">
            
            main page</div>
        </div>
      </div>
    );
  };
  if (isInit) {
    return <Loader />;
  }
  if (!isUserLoggedIn) {
    return <Redirect to={"/auth/login"} />;
  }
  {
    console.log("main " + isUserLoggedIn);
  }
  return getMainRender();
}

export default connect(
  (state) => ({
    isInit: state.main.isInit,
    isUserLoggedIn: state.main.isUserLoggedIn,
  }),
  (dispatch) => {
    return {
      init: () => {
        dispatch({ type: mainActions.INIT_REQUESTED, payload: null });
      },
    };
  }
)(Main);
