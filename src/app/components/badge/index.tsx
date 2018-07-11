// 徽标数

import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import "./index.less";

interface IBadgeProps {
  count?: number | string;
  dot?: boolean;
  offset?: [number, number];
  overflowCount?: number;
  showZero?: boolean;
  status?: "success" | "processing" | "default" | "error" | "warning";
  text?: string;
  title?: string;
}

export default class Badge extends React.Component<IBadgeProps, any> {
  static defaultProps = {
    prefixCls: "ykx-badge",
  };

  static propTypes = {
    dot: PropTypes.bool,
  };

  constructor(props: IBadgeProps) {
    super(props);
  }

  getCount() {
    // const { count = 0, overflowCount = 99, showZero, dot } = this.props;
    // let displayCount =
    //   // 使用类型断言强制在比较时使用number类型
    //   (count as number) > (overflowCount as number)
    //     ? `${overflowCount}+`
    //     : count;
    // const isZero = displayCount === 0 || displayCount === "0";
    // const isDot = (dot && !isZero) || status;
    // if (!isDot) {
    //   displayCount = "";
    // }
    // const isEmpty =
    //   displayCount === "" ||
    //   displayCount === undefined ||
    //   displayCount === null;
    // // 不显示徽标
    // const hidden = (isEmpty || (isZero && !showZero)) && !isDot;
    // if (isZero && !showZero) {
    //   return "";
    // }
    return "999+";
  }

  render() {
    const {
      children,
      dot,
      offset = [0, 0],
      status = "error",
      text,
      title,
    } = this.props;
    const result = this.getCount();
    const dotStyle = classNames({
      "ykx-badge-dot": true,
      "ykx-badge-main": true,
      [`ykx-badge-${status}`]: Boolean(status),
    });
    const itemStyle = classNames({
      "ykx-badge-item": true,
      "ykx-badge-main": true,
    });
    const selfStyle = {
      right: -offset[0],
      top: -offset[1],
    };
    const createBadge = (): React.ReactElement<HTMLElement> | null => {
      if (dot) {
        return (
          <span title={title}>
            <span className={dotStyle} style={selfStyle} />
            {text ? <span>{text}</span> : null}
          </span>
        );
      } else {
        return result ? <span className={itemStyle}>{result}</span> : null;
      }
    };
    return (
      <span className="ykx-badge">
        {createBadge()}
        {children}
      </span>
    );
  }
}
