// markdown

import * as React from "react";
import * as ReactMarkdown from "react-markdown";
import "./index.less";

interface IMarkdown {
  source: string;
}

export default class Markdown extends React.Component<IMarkdown, any> {
  render() {
    const { source } = this.props;
    return <ReactMarkdown className="ykx-markdown" source={source} />;
  }
}
