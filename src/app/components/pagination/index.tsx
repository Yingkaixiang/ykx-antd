import classNames from "classnames";
import * as React from "react";
import Icon from "../icon/";
import "./index.less";

interface IPagination {
  current?: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  hideOnSinglePage?: boolean;
  pageSize?: number;
  total?: number;
}

interface IPages {
  page: number;
  isSelected: boolean;
}

export default class Pagination extends React.Component<IPagination, any> {
  constructor(props: IPagination) {
    super(props);
    this.state = {
      pages: this.initPageData(),
    };
  }

  initPageData = (): IPages[] => {
    const { total = 0, pageSize = 10, defaultCurrent = 1 } = this.props;
    const length = Math.ceil(total / pageSize);
    const arr = [];
    for (let i = 0; i < length; i += 1) {
      const data: IPages = {
        isSelected: i + 1 === defaultCurrent,
        page: i + 1,
      };
      arr.push(data);
    }
    return arr;
  };

  renderPages() {
    const { pages } = this.state;
    if (pages) {
      const arr = pages.map((item: IPages, index: number) => {
        const itemCls = classNames({
          "ykx-pagination-item": true,
          "ykx-pagination-item-active": item.isSelected,
        });
        return (
          <li className={itemCls} key={index}>
            {item.page}
          </li>
        );
      });
      const prevCls = classNames({
        "ykx-pagination-item": true,
        "ykx-pagination-item-disabled": true,
      });
      arr.push(
        <li className="ykx-pagination-item">
          <Icon type="right" />
        </li>,
      );
      arr.unshift(
        <li className={prevCls}>
          <Icon type="left" />
        </li>,
      );
      return arr;
    }
    return null;
  }
  render() {
    return <ul>{this.renderPages()}</ul>;
  }
}
