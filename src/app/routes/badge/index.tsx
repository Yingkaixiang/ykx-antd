import * as React from "react";
import Badge from "../../components/badge/";
import Codebox from "../../components/codebox/";

function BadgeDoc() {
  return (
    <Codebox
      title="基础"
      desc="简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。"
      style={{ margin: 20 }}
    >
      <Badge>
        <div style={{ width: 40, height: 40, background: "#ccc" }} />
      </Badge>
    </Codebox>
  );
}

export default BadgeDoc;
