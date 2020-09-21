import React from "react";
import Tabs, { TabPane } from "rc-tabs";

export { TabPane };

export default function FlowTabs({ children, ...rest }) {
  return (
    <Tabs prefixCls="flow-tabs" {...rest}>
      {children}
    </Tabs>
  );
}
