import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import "./app.css";
import { Layout, Menu } from "antd";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Movie from "./components/movie/Movie";

const { Header, Content, Footer } = Layout;

class App extends Component {
    state = {};

    render() {
        return (
            <HashRouter>
                <Layout className="layout" style={{ height: "100%" }}>
                    <Header style={{ marginBottom: "10px" }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={window.location.hash.split("/")[1]}
                        >
                            <Menu.Item key="null" style={{ marginLeft: "" }}></Menu.Item>
                            <Menu.Item key="home">
                                <Link to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="movie">
                                <Link to="/movie">电影</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/about">疫情地图</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>

                    <Layout style={{}}>
                        <Content style={{ height: "100%" }}>
                            <div className="site-layout-content">
                                <Route path="/home" component={Home}></Route>
                                <Route path="/movie" component={Movie}></Route>
                                <Route path="/about" component={About}></Route>
                            </div>
                        </Content>
                    </Layout>

                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </HashRouter>
        );
    }
}

export default App;
