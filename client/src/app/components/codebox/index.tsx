/**
 * 代码演示
 * v0.0.2
 */

import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { coy, tomorrow } from "react-syntax-highlighter/styles/prism";

import Icon from "components/icon/";
import Markdown from "components/markdown/";

import "./index.less";

interface ICodeboxProps extends React.HTMLAttributes<{}> {
  code?: string;
  desc: string;
  language: "javascript" | "markdown" | "jsx";
  title: string;
}

export default class Codebox extends React.Component<ICodeboxProps, any> {
  constructor(props: ICodeboxProps) {
    super(props);
    this.state = {
      showCode: false,
    };
  }

  handleShowCode = (): void => {
    this.setState({ showCode: !this.state.showCode });
  };

  edit = (id: string): void => {
    window.location.hash = `#${id}`;
  };

  render() {
    const { showCode } = this.state;
    const {
      title,
      children,
      desc,
      code = "还没有可展示的代码",
      language,
      ...restProps
    } = this.props;

    const renderHighLight = () => {
      const highlightMapping = {
        javascript: coy,
        jsx: coy,
        markdown: tomorrow,
      };
      return (
        <section className="ykx-codebox-highlight">
          <SyntaxHighlighter
            language={language}
            style={highlightMapping[language]}
          >
            {code}
          </SyntaxHighlighter>
        </section>
      );
    };

    return (
      <section className="ykx-codebox" {...restProps}>
        <section className="ykx-codebox-demo">{children}</section>
        <section className="ykx-codebox-meta">
          <div className="ykx-codebox-title">
            <span>{title}</span>
            <Icon
              className="ykx-codebox-edit"
              type="edit"
              onClick={this.edit.bind(this, this.props.id)}
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
