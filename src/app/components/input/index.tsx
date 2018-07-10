/**
 * 输入框
 *
 */

import * as React from "react";

interface IInputProps {
  placeholder?: string;
}

class Input extends React.Component<IInputProps, any> {
  constructor(props: IInputProps) {
    super(props);
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.keyCode);
  };

  render() {
    const { placeholder } = this.props;
    return (
      <div>
        <input placeholder={placeholder} onKeyDown={this.handleKeyDown} />
      </div>
    );
  }
}

export default Input;
