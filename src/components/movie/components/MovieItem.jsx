import "./MovieItem.scss";

import React, { Component } from "react";
import { Card } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

class MovieItem extends Component {
  constructor(props) {
    super(props);
  }
  static propType = {
    movie: PropTypes.object.isRequired,
  };
  render() {
    const { movie } = this.props;
    console.log(movie);

    return (
      <div className="movieItem">
        {/* <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img alt={movie.subject.year} src={movie.subject.images.small} />
          }
        >
          <Meta
            title={movie.subject.title}
            description={movie.subject.genres}
          />
        </Card> */}

        <Card
          hoverable
          style={{ width: 180 }}
          cover={
            <img
              alt={movie.year}
              src={movie.images.small.replace("img3", "img9")}
            />
          }
        >
          <Meta title={movie.title} description={movie.genres} />
        </Card>
      </div>
    );
  }
}

export default MovieItem;
