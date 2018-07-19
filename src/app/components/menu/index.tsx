import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";
import "./index.less";

interface IMenu {
  routes?: any[];
}

export default class Menu extends React.Component<IMenu, any> {
  constructor(props: IMenu) {
    super(props);
    this.state = {
      routes: this.props.routes,
    };
  }

  navigateTo = (i: number): void => {
    const { routes } = this.state;
    const list = routes.map((item: any, index: number) => {
      console.log(i);
      console.log(index);
      if (index === i) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    console.dir(list);
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
        <li
          className={menuItemCls}
          key={index}
          onClick={this.navigateTo.bind(this, index)}
        >
          <Link to={item.url}>
            {item.title} <span className="ykx-chinese">{item.titleChs}</span>
          </Link>
        </li>
      );
    });
  };

  render() {
    return <ul className="ykx-menu">{this.renderRoutes()}</ul>;
  }
}
