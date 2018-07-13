// markdown

import * as React from "react";
import "./index.less";

interface IMarkdown {
  source: string;
}

export default class Markdown extends React.Component<IMarkdown, any> {
  render() {
    const { source } = this.props;
    const html = source.replace(/```(\w+)```/g, (...data: any[]) => {
      return `<span class="ykx-markdown-code">${data[1]}</span>`;
    });
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
}
