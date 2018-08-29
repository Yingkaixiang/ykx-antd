import * as NProgress from "nprogress";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "components/menu/";

import "../../node_modules/nprogress/nprogress.css";
import "./App.less";

import Routes from "./router";

function App() {
  NProgress.start();
  return (
    <Router basename="/components">
      <div className="ykx">
        <header className="ykx-head" />
        <div className="ykx-body">
          <div className="ykx-left">
            <Menu />
          </div>
          <div className="ykx-main">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

declare let module: any;
if (module.hot) {
  module.hot.accept();
}
