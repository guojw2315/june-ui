import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { postAuthenticate } from "../api/flow";
import { setToken, setRefreshToken } from "../api/request";
const { Header, Content, Footer } = Layout;

import "./index.less";

export default function BaseLayout(props) {
  useEffect(() => {
    // postAuthenticate({
    //   username: 'admin',
    //   password: 'SDLCOSO2.0'
    // }).then((res) => {
    //   console.log(res)
    //   setToken(res.data.data);
    //   // setRefreshToken(res.headers.refresh_token)
    // });
    return () => {};
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}></Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
