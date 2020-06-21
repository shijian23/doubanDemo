import React, { Component } from "react";
import fetchJSONP from "fetch-jsonp";

class About extends Component {
  state = {};
  render() {
    return <div>About</div>;
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const data = require("../../mock/yiqing.json");
    console.log(data);
    
  }
}

export default About;
