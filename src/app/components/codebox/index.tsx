// 代码演示

import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/styles/hljs";
import Icon from "../icon/";
import Markdown from "../markdown/";
import "./index.less";

interface ICodeBoxProps {
  title: string;
  desc: string;
  style?: object;
  language?: "javascript" | "markdown" | "jsx";
  code?: string;
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

  edit = () => {
    window.open("https://github.com/Yingkaixiang/ykx-antd");
  };

  render() {
    const { showCode } = this.state;
    const {
      title,
      children,
      desc,
      code = "还没有可展示的代码",
      language = "javascript",
      ...restProps
    } = this.props;

    function renderHighLight() {
      return (
        <section className="ykx-codebox-highlight">
          <SyntaxHighlighter language={language} style={vs}>
            {code}
          </SyntaxHighlighter>
        </section>
      );
    }
    return (
      <section className="ykx-codebox" {...restProps}>
        <section className="ykx-codebox-demo">{children}</section>
        <section className="ykx-codebox-meta">
          <div className="ykx-codebox-title">
            {title}
            <Icon
              className="ykx-codebox-edit"
              type="edit"
              onClick={this.edit}
            />
          </div>
          <Markdown source={desc} />
          <Icon
            onClick={this.handleShowCode}
            className="ykx-codebox-show"
            type={showCode ? "arrows-alt" : "shrink"}
          />
        </section>
        {showCode ? renderHighLight() : null}
      </section>
    );
  }
}
