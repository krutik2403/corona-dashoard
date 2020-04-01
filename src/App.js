import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import { Home } from "./view/home";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
