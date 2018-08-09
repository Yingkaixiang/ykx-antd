// 分页

import classNames from "classnames";
import * as React from "react";
import Icon from "../icon/";
import "./index.less";

export interface IPagination {
  defaultCurrent?: number;
  defaultPageSize?: number;
  total?: number;
}

export default class Pagination extends React.Component<IPagination, any> {
  static defaultProps = {
    defaultCurrent: 1,
    defaultPageSize: 10,
    total: 0,
  };

  constructor(props: IPagination) {
    super(props);
    const { defaultCurrent, defaultPageSize } = props;
    this.state = {
      current: defaultCurrent,
      pageSize: defaultPageSize,
    };
  }

  calculatePage = (): number => {
    const { pageSize } = this.state;
    const { total } = this.props;
    if (total) {
      return Math.ceil(total / pageSize);
    }
    return 0;
  };

  handlePageNumberClick = (current: number) => {
    this.setState({ current });
  };

  handlePrevClick = (current: number) => {
    if (current > 1) {
      this.setState({
        current: current - 1,
      });
    }
  };

  handleNextClick = (current: number, total: number) => {
    if (current < total) {
      this.setState({
        current: current + 1,
      });
    }
  };

  renderPageNumbers = () => {
    const { total } = this.props;
    const { current } = this.state;
    if (!total) {
      return [];
    } else {
      const arr = [];
      const length = this.calculatePage();
      if (length <= 10) {
        for (let i = 0; i < length; i += 1) {
          const page = i + 1;
          const pageNumberCls = classNames({
            "ykx-pagination-item": true,
            "ykx-pagination-item-active": page === current,
          });
          arr.push(
            <li
              className={pageNumberCls}
              key={i}
              onClick={this.handlePageNumberClick.bind(this, page)}
            >
              {page}
            </li>,
          );
        }
      } else {
        const pageNumberCls = classNames({
          "ykx-pagination-item": true,
          "ykx-pagination-item-active": false,
        });
        arr.push(
          <li className={pageNumberCls} key={1}>
            1
          </li>,
        );
        arr.push(<Icon type="ellipsis" />);
        arr.push(<Icon type="ellipsis" />);
        arr.push(
          <li className={pageNumberCls} key={length}>
            {length}
          </li>,
        );
      }
      return arr;
    }
  };

  // 上一页
  renderPrev() {
    const { current } = this.state;
    const prevCls = classNames({
      "ykx-pagination-item": true,
      "ykx-pagination-item-disabled": current === 1,
    });
    return (
      <li
        className={prevCls}
        onClick={this.handlePrevClick.bind(this, current)}
      >
        <Icon type="left" />
      </li>
    );
  }

  // 下一页
  renderNext() {
    const { current } = this.state;
    const lastPage = this.calculatePage();
    const nextCls = classNames({
      "ykx-pagination-item": true,
      "ykx-pagination-item-disabled": current === lastPage,
    });
    return (
      <li
        className={nextCls}
        onClick={this.handleNextClick.bind(this, current, lastPage)}
      >
        <Icon type="right" />
      </li>
    );
  }

  render() {
    return (
      <ul>
        {this.renderPrev()}
        {this.renderPageNumbers()}
        {this.renderNext()}
      </ul>
    );
  }
}
