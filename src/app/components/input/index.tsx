/**
 * 输入框
 *
 */

import * as React from 'react';

interface InputProps {
  placeholder?: string;
}

class Input extends React.Component<InputProps, any> {
  onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.keyCode);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div onKeyDown={this.onKeyPress.bind(this)}>
        <input placeholder={placeholder} />
      </div>
    );
  }
}

export default Input;
