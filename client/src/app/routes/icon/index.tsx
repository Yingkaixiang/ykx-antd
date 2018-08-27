import * as React from "react";

import Icon from "components/icon";
import Markdown from "components/markdown";

import request from "utils/request";

import "./index.less";

import list from "./list";

export default class IconDoc extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  componentWillMount() {
    request("/api/markdown/icon").then((data) => {
      this.setState({
        markdown: data.data,
      });
    });
  }

  renderIcon() {
    return list.map((item, index) => {
      return (
        <li key={index}>
          <Icon type={item.name} className="ykx-icon-page-img" />
          <div>{item.name}</div>
        </li>
      );
    });
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="ykx-page">
        <Markdown source={markdown} />
        <div className="ykx-icon-page">
          <ul>{this.renderIcon()}</ul>
        </div>
      </div>
    );
  }
}
