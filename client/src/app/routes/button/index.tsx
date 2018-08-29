import * as React from "react";

import Button from "components/button/";
import Codebox from "components/codebox/";

const desc = `按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
>\`danger\` 在 \`antd@2.7\` 后支持。`;

const code = `<Button type="primary">Primary</Button>
<Button>Default</Button>
<Button type="dashed">Dashed</Button>
<Button type="danger">Danger</Button>
`;

export default class ButtonDoc extends React.Component<{}, any> {
  render() {
    return (
      <div>
        <Codebox title="按钮类型" desc={desc} code={code} language="jsx">
          <Button type="primary" style={{ marginRight: 8 }}>
            Primary
          </Button>
          <Button style={{ marginRight: 8 }}>Default</Button>
          <Button type="dashed" style={{ marginRight: 8 }}>
            Dashed
          </Button>
          <Button type="danger" style={{ marginRight: 8 }}>
            Danger
          </Button>
        </Codebox>
      </div>
    );
  }
}
