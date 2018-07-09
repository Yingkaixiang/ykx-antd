/**
 * 单选框
 */

import * as React from 'react';
import classNames from 'classnames';
import './index.less';

interface RadioProps {
  checked?: boolean;
  defaultChecked?: boolean;
}

class Radio extends React.Component<RadioProps, any> {
  constructor(props: RadioProps) {
    super(props);
    const { defaultChecked } = this.props;
    this.state = {
      checked: defaultChecked,
    };
  }

  check() {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
  }

  render() {
    const { checked } = this.state;
    const { children } = this.props;
    const className = classNames({
      'ykx-radio-inner': true,
      'ykx-radio-inner-checked': checked,
    });
    return (
      <div className="ykx-radio" onClick={this.check.bind(this)}>
        <span className={className} />
        <span>{children || ''}</span>
      </div>
    );
  }
}

export default Radio;
