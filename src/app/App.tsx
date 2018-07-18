import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Link } from "react-router-dom";
import "./App.less";
import Routes from "./router";

function App() {
  return (
    <Router>
      <div className="ykx">
        <div className="ykx-menu">
          <Link to="/">Home</Link>
          <Link to="/markdown">markdown</Link>
          <Link to="/badge">badge</Link>
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
