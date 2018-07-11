// 徽标数

import * as React from "react";
import "./index.less";

interface IBadgeProps {
  count?: number;
  dot?: boolean;
  offset?: [number, number];
  overflowCount?: number;
  showZero?: boolean;
  status?: string;
  text?: string;
  title?: string;
}

class Badge extends React.Component<IBadgeProps, any> {
  constructor(props: IBadgeProps) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <span className="ykx-badge">
        <span className="ykx-badge-item">123</span>
        {children}
      </span>
    );
  }
}

export default Badge;
