import * as React from "react";
import * as ReactDOM from "react-dom";
import Badge from "./components/badge/";

const root = document.getElementById("root");
const badgeStyle = {
  background: "#eee",
  borderRadius: 4,
  height: 42,
  width: 42,
};

ReactDOM.render(
  <div>
    <Badge count={0}>
      <div style={badgeStyle} />
    </Badge>
  </div>,
  root,
);

declare let module: any;
if (module.hot) {
  module.hot.accept();
}
