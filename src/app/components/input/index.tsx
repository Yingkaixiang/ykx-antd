/**
 * 输入框
 *
 */

import * as React from "react";

interface IInputProps {
  placeholder?: string;
}

class Input extends React.Component<IInputProps, any> {
  public onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.keyCode);
  }

  public render() {
    const { placeholder } = this.props;
    return (
      <div onKeyDown={this.onKeyPress.bind(this)}>
        <input placeholder={placeholder} />
      </div>
    );
  }
}

export default Input;
