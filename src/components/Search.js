import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import axios from "axios";
import Articles from "./Articles";

class Search extends Component {
  render() {
    var search = this.props.match.params.search;
    return (
      <>
        <Slider titulo={"Busqeda: " + search} size="slider-small" />
        <div className="center">
          <div id="content">
            <Articles search={search} />
          </div>
          <Sidebar blog="true" />
        </div>
      </>
    );
  }
}

export default Search;
