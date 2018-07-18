// markdown

import * as mmd from "micromarkdown";
import * as React from "react";
import "./index.less";

interface IMarkdown {
  source: string;
}

export default class Markdown extends React.Component<IMarkdown, any> {
  render() {
    const { source } = this.props;
    return (
      <span
        className="ykx-markdown"
        dangerouslySetInnerHTML={{ __html: mmd.parse(source) }}
      />
    );
  }
}
