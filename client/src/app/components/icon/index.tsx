// 图标

import classNames from "classnames";
import * as React from "react";
import "./index.less";

interface IIcon {
  className?: string;
  spin?: boolean;
  style?: object;
  type: string;
  onClick?: React.MouseEventHandler;
}

export default class Icon extends React.Component<IIcon, any> {
  render() {
    const { type, className = "", ...restProps } = this.props;
    const iconCls = classNames(
      {
        "ykx-icon": true,
        [`ykx-icon-${type}`]: true,
      },
      className,
    );
    return <span className={iconCls} {...restProps} />;
  }
}
