import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from "react";
import { Tabs } from 'antd';
var TabPane = Tabs.TabPane;
export { TabPane };
export default function FlowTabs(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Tabs, rest, children);
}
//# sourceMappingURL=index.js.map