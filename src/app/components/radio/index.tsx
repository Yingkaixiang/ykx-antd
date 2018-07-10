/**
 * 单选框
 */

import classNames from "classnames";
import * as React from "react";
import "./index.less";

interface IRadioProps {
  checked?: boolean;
  defaultChecked?: boolean;
}

class Radio extends React.Component<IRadioProps, any> {
  constructor(props: IRadioProps) {
    super(props);
    const { defaultChecked } = this.props;
    this.state = {
      checked: defaultChecked,
    };
  }

  public check() {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
  }

  public render() {
    const { checked } = this.state;
    const { children } = this.props;
    const className = classNames({
      "ykx-radio-inner": true,
      "ykx-radio-inner-checked": checked,
    });
    return (
      <div className="ykx-radio" onClick={this.check.bind(this)}>
        <span className={className} />
        <span>{children || ""}</span>
      </div>
    );
  }
}

export default Radio;
