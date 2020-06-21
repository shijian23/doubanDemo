import styles from "./MovieList.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchJSONP from "fetch-jsonp";
import MovieItem from "./MovieItem";
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nowPage: parseInt(props.match.params.page) || 1,
      pageSize: 12,
      total: 0,
      isLoading: true,
      movieType: props.match.params.state,
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.loadMovieByTypeAndPages();
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    this.setState(
      {
        isLoading: true,
        nowPage: parseInt(nextProps.match.params.page) || 1,
        movieType: nextProps.match.params.state,
      },
      () => this.loadMovieByTypeAndPages()
    );
  }

  loadMovieByTypeAndPages = () => {
    // const start = this.state.pageSize * (this.nowPage - 1);
    // const movieType = this.state.movieType;
    // const pageSize = this.state.pageSize;
    // fetchJSONP(
    //   `http://api.douban.com/v2/movie/${movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${pageSize}`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({
    //       movies: res.subjects,
    //       isLoading: false,
    //       total: res.total,
    //     });
    //   });
    const data = require("../../../mock/" + this.state.movieType + ".json");
    setTimeout(() => {
      this.setState({
        movies: data.subjects,
        isLoading: false,
        total: data.total,
      });
    }, 500);
  };

  renderList = () => {
    if (this.state.isLoading) {
      return <h1>loading</h1>;
    } else {
      {
        return this.state.movies.map((movie, index) => {
          return <MovieItem key={index} movie={movie}></MovieItem>;
        });
      }
    }
  };

  render() {
    return (
      <div
        className={styles.movieList}
        
      >
        {this.renderList()}
      </div>
    );
  }
}

export default MovieList;
