// markdown

import * as React from "react";
import "./index.less";

interface IMarkdown {
  source: string;
}

interface IParse {
  reg: RegExp;
  source?: string;
  replacement: (str: string) => string;
}

// 将markdown解析为html
function parseToHtml(params: IParse): string {
  const { reg, source = "", replacement } = params;
  return source.replace(reg, (...data: any[]) => {
    return replacement(data[1]);
  });
}

interface IMarkdownReg {
  [propName: string]: IParse;
}

const markdownReg: IMarkdownReg = {
  code: {
    reg: /```(\w+)```/g,
    replacement: (str) => {
      return `<span class="ykx-markdown-code">${str}</span>`;
    },
  },
  title: {
    reg: /#\s+(.+)/g,
    replacement: (str) => {
      return `<h1>${str}</h1>`;
    },
  },
};

export default class Markdown extends React.Component<IMarkdown, any> {
  render() {
    const { source } = this.props;
    const html = Object.keys(markdownReg).reduce(
      (prev: string, item: string): string => {
        const { reg, replacement } = markdownReg[item];
        return parseToHtml({ reg, source: prev, replacement });
      },
      source,
    );
    return (
      <span
        className="ykx-markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}
