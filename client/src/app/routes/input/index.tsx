import * as React from "react";

import Codebox from "components/codebox/";
import Input from "components/input/";

export default class InputDoc extends React.Component<{}, any> {
  render() {
    return (
      <div>
        <Codebox
          title="基本使用"
          desc="基本使用"
          language="jsx"
          code="<Input />"
        >
          <Input placeholder="Basic usage" />
        </Codebox>
      </div>
    );
  }
}
