// 分页

import classNames from "classnames";
import * as React from "react";
import Icon from "../icon/";
import "./index.less";

export interface IPagination {
  style?: object;
  defaultCurrent?: number;
  defaultPageSize?: number;
  total?: number;
  showTotal?: (total?: number, range?: number[]) => string;
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

  // 获取总页数
  getTotalPage = (): number => {
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

  // 向前五页
  prevFivePage = () => {
    const { current } = this.state;
    const page = current - 5 > 1 ? current - 5 : 1;
    this.setState({ current: page });
  };

  // 向后五页
  nextFivePage = () => {
    const { current } = this.state;
    const { total } = this.props;
    if (total) {
      const page = current + 5 < total ? current + 5 : total;
      this.setState({ current: page });
    }
  };

  getCurrentPageStyle = (page: number, current: number): string => {
    const pageNumberCls = classNames({
      "ykx-pagination-item": true,
      "ykx-pagination-item-active": page === current,
    });
    return pageNumberCls;
  };

  renderPageNumbers = () => {
    const { total } = this.props;
    const { current } = this.state;
    if (!total) {
      return [];
    } else {
      const arr = [];
      const length = this.getTotalPage();
      if (length <= 10) {
        for (let i = 0; i < length; i += 1) {
          const page = i + 1;
          const pageNumberCls = this.getCurrentPageStyle(page, current);
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
        arr.push(
          <li className={this.getCurrentPageStyle(current, 1)} key={1}>
            1
          </li>,
        );
        if (current - 1 >= 4) {
          arr.push(
            <Icon
              className="ykx-pagination-ellipsis"
              type="ellipsis"
              onClick={this.prevFivePage}
            />,
          );
        }
        const offset = 2;
        for (let i = current - offset; i < current + offset + 1; i += 1) {
          const pageNumberCls = this.getCurrentPageStyle(current, i);
          arr.push(
            <li className={pageNumberCls} key={i}>
              {i}
            </li>,
          );
        }
        if (this.getTotalPage() - current >= 4) {
          arr.push(
            <Icon
              className="ykx-pagination-ellipsis"
              type="ellipsis"
              onClick={this.prevFivePage}
            />,
          );
        }
        arr.push(
          <li
            className={this.getCurrentPageStyle(current, length)}
            key={length}
          >
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
    const lastPage = this.getTotalPage();
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

  // 总数
  renderTotal() {
    const { current, pageSize } = this.state;
    const { showTotal } = this.props;
    if (showTotal) {
      const length = this.getTotalPage();
      const text = showTotal(length, [
        (current - 1) * pageSize + 1,
        current * pageSize,
      ]);
      return <span className="ykx-pagination-total-text">{text}</span>;
    } else {
      return null;
    }
  }

  render() {
    const { style } = this.props;
    return (
      <ul className="ykx-pagination" style={style}>
        {this.renderTotal()}
        {this.renderPrev()}
        {this.renderPageNumbers()}
        {this.renderNext()}
      </ul>
    );
  }
}
