import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import "antd/es/tabs/style/css";
import _Tabs from "antd/es/tabs";
import React from "react";
var TabPane = _Tabs.TabPane;
export { TabPane };
export default function FlowTabs(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(_Tabs, rest, children);
}
//# sourceMappingURL=index.js.map