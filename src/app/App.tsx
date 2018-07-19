import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./App.less";
import Menu from "./components/menu/";
import Routes from "./router";

const routes = [
  {
    isSelected: false,
    title: "Home",
    titleChs: "首页",
    url: "/",
  },
  {
    isSelected: false,
    title: "Markdown",
    titleChs: "编辑器",
    url: "/markdown",
  },
  {
    isSelected: false,
    title: "Badge",
    titleChs: "徽章",
    url: "/badge",
  },
];

function App() {
  return (
    <Router>
      <div className="ykx">
        <div className="ykx-left">
          <Menu routes={routes} />
        </div>
        <div className="ykx-main">
          <Routes />
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
