import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./components/button/";
import Input from "./components/input/";
import Radio from "./components/radio/";

const root = document.getElementById("root");

ReactDOM.render(
  <div>
    <Button style={{ margin: 8 }} type="primary">
      Primary
    </Button>
    <Button style={{ margin: 8 }} type="primary" ghost>
      Primary
    </Button>
    <Button style={{ margin: 8 }}>Default</Button>
    <Button style={{ margin: 8 }} disabled>
      Disabled
    </Button>
    <Radio>Radio</Radio>
    <Input />
  </div>,
  root,
);

declare let module: any;
if (module.hot) {
  module.hot.accept();
}
