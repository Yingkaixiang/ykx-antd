import * as React from 'react';
import classNames from 'classnames';
import './index.less';

interface baseButtonProps {
  disabled?: boolean;
  ghost?: boolean;
  htmlType?: string;
  type?: string;
  loading?: boolean;
  onClick?: () => void;
}

// 将组件属性接口与React元素属性接口进行合并
type ButtonProps = baseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

// 泛型第一个参数为Component的接口
// 泛型第二个参数为state的接口
class Button extends React.Component<ButtonProps, any> {
  constructor(props: ButtonProps) {
    super(props);
  }
  onClick() {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }
  render() {
    const {
      disabled,
      ghost,
      htmlType,
      type,
      children,
      style,
      loading,
    } = this.props;
    const btnType = disabled ? 'disabled' : type || 'default';
    const buttonClass = classNames({
      ['ykx-button']: true,
      [`ykx-button-${btnType}`]: true,
      [`ykx-button-${btnType}-ghost`]: ghost,
    });
    return (
      <button
        className={buttonClass}
        style={style}
        onClick={this.onClick.bind(this)}
        disabled={disabled}
        type={htmlType || 'button'}
      >
        {loading ? '加载中...' : ''}
        {children || 'button'}
      </button>
    );
  }
}

export default Button;
