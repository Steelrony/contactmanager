import React, { Component } from "react";
import Contacts from "./components/contatcs/Contacts";
import Header from "./components/layout/Header";

import { Provider } from "./context";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
