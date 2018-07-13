// 代码演示

import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/styles/hljs";
import Icon from "../icon/";
import "./index.less";

interface ICodeBoxProps {
  title: string;
  desc: React.ReactElement<HTMLElement> | string;
  style?: object;
}

export default class Codebox extends React.Component<ICodeBoxProps, any> {
  constructor(props: ICodeBoxProps) {
    super(props);
    this.state = {
      showCode: false,
    };
  }

  handleShowCode = () => {
    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    const { showCode } = this.state;
    const { title, children, desc, ...restProps } = this.props;
    const codeString = "(num) => num + 1";

    function getA() {
      return (
        <section className="code-box-highlight">
          <SyntaxHighlighter language="javascript" style={vs}>
            {codeString}
          </SyntaxHighlighter>
        </section>
      );
    }
    return (
      <section className="code-box" {...restProps}>
        <section className="code-box-demo">{children}</section>
        <section className="code-box-meta">
          <div className="code-box-title">{title}</div>
          {desc}
          <Icon
            onClick={this.handleShowCode}
            className="code-box-show"
            type={showCode ? "arrows-alt" : "shrink"}
          />
        </section>
        {showCode ? getA() : null}
      </section>
    );
  }
}
