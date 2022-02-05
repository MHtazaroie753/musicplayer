import React from "react";
// import Main from "./Main/Main";
// import { Route } from 'react-router-dom';
import routes from "./Router/routes";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </>
  );
}

export default App;
