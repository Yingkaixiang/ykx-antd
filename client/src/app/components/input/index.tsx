/**
 * 输入框
 */

import * as React from "react";

import "./index.less";

interface IInputProps {
  placeholder?: string;
}

type IInput = IInputProps & React.InputHTMLAttributes<HTMLInputElement>;

class Input extends React.Component<IInput, any> {
  constructor(props: IInputProps) {
    super(props);
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.keyCode);
  };

  render() {
    const { placeholder, ...restProps } = this.props;
    return (
      <input
        className="ykx-input"
        placeholder={placeholder}
        onKeyDown={this.handleKeyDown}
        {...restProps}
      />
    );
  }
}

export default Input;
