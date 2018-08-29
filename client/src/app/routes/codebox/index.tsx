import * as React from "react";

import Codebox from "components/codebox/";

const code1 = `<Codebox
  title="简单使用"
  desc="展示组件功能以及相关描述信息。"
  language="jsx"
  id="codebox-simple-use"
  style={{ marginBottom: 16 }}
/>
`;

const code2 = `<Codebox
  itle="高亮"
  desc="点击标题可以高亮当前组件"
  language="jsx"
  id="codebox-highlight"
/>
`;

export default class CodeboxDoc extends React.Component<{}, any> {
  render() {
    return (
      <div>
        <Codebox
          title="简单使用"
          desc="展示组件功能以及相关描述信息。"
          language="jsx"
          id="codebox-simple-use"
          code={code1}
          style={{ marginBottom: 16 }}
        />
        <Codebox
          title="高亮"
          desc="点击标题可以高亮当前组件"
          language="jsx"
          code={code2}
          id="codebox-highlight"
        />
      </div>
    );
  }
}
