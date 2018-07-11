// 代码演示

import * as React from "react";
import "./index.less";

interface ICodeBoxProps {
  title: string;
  desc: React.ReactElement<HTMLElement> | string;
  style?: object;
}

export default class Codebox extends React.Component<ICodeBoxProps, any> {
  render() {
    const { title, children, desc, ...restProps } = this.props;
    return (
      <section className="code-box" {...restProps}>
        <section className="code-box-demo">{children}</section>
        <section className="code-box-meta">
          <div className="code-box-title">{title}</div>
          {desc}
        </section>
      </section>
    );
  }
}
