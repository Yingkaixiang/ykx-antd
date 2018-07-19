import * as React from "react";
import { Link } from "react-router-dom";
import "./index.less";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="ykx-menu">
        <Link to="/">Home</Link>
        <Link to="/markdown">markdown</Link>
        <Link to="/badge">badge</Link>
      </div>
    );
  }
}
