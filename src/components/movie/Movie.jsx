import React, { Component } from "react";
import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;

class Movie extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ height: "100%" }}>
          <div className="site-layout-content">111111</div>
        </Content>
      </Layout>
    );
  }
}

export default Movie;
