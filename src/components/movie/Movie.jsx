import styles from "./Movie.scss";

import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
const { Content, Sider } = Layout;

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Sider
          width={200}
          style={{ height: "100%" }}
          className="site-layout-background"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.hash.split('/')[2]]}
            defaultOpenKeys={["new_movies"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="us_box">
              <Link to="/movie/us_box/1">北美票房榜</Link>
            </Menu.Item>
            <Menu.Item key="new_movies">
              <Link to="/movie/new_movies/1">豆瓣新片</Link>
            </Menu.Item>
            <Menu.Item key="top250">
              <Link to="/movie/top250/1">top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ height: "100%" }}>
          <Route path="/movie/:state/:page" component={MovieList}></Route>
        </Content>
      </Layout>
    );
  }
}

export default Movie;
