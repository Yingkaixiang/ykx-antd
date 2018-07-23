import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";
import "./index.less";
import menu from "./menu";

// TypeScript里的类型兼容性是基于结构子类型的
// 所以在检查赋值或是函数参数时
// 只要满足不缺少目标类型的属性就可以，多余的属性不会引发错误
interface IRoutes {
  title: string;
  titleChs: string;
  url: string;
  isSelected?: boolean;
}

export default class Menu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      routes: this.initRoutes(menu),
    };
  }

  initRoutes = (arr: IRoutes[]) => {
    return arr.map((item) => {
      item.isSelected = false;
      return item;
    });
  };

  navigateTo = (i: number): void => {
    const { routes } = this.state;
    const list = routes.map((item: IRoutes, index: number) => {
      if (index === i) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    this.setState({ routes: list });
  };

  renderRoutes = () => {
    const { routes } = this.state;
    return routes.map((item: any, index: number) => {
      const menuItemCls = classNames({
        "ykx-menu-item": true,
        "ykx-menu-item-selected": item.isSelected,
      });
      return (
        <Link to={item.url} key={index}>
          <li
            className={menuItemCls}
            onClick={this.navigateTo.bind(this, index)}
          >
            {item.title} <span className="ykx-chinese">{item.titleChs}</span>
          </li>
        </Link>
      );
    });
  };

  render() {
    return <ul className="ykx-menu">{this.renderRoutes()}</ul>;
  }
}
