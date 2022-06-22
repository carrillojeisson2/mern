import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import axios from "axios";
import Articles from "./Articles";

class Blog extends Component {
  render() {
    return (
      <>
        <Slider titulo=" Blog" size="slider-small" />
        <div className="center">
          <div id="content">
            <Articles />
          </div>
          <Sidebar blog="true" />
        </div>
      </>
    );
  }
}

export default Blog;
