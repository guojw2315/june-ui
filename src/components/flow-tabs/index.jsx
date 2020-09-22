import React from "react";

import { Tabs } from 'antd';

const { TabPane } = Tabs

export { TabPane };

export default function FlowTabs({ children, ...rest }) {
  return (
    <Tabs {...rest}>
      {children}
    </Tabs>
  );
}
