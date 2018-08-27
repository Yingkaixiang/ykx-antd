import React from "react";
import Badge from "../src/app/components/badge/";
import renderer from "react-test-renderer";

test("测试 Badge 组件", () => {
  const component = renderer.create(<Badge count={10} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
