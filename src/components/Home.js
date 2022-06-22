import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import Articles from "./Articles";
import ArticlesHome from "./ArticlesHome";

class Home extends Component {
  render() {
    var buttonString = "Ir al blog";

    return (
      <>
        <Slider
          titulo=" Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
          btn={buttonString}
          size="slider-big"
        />
        <div className="center">
          <div id="content">
            <h1 className="subheader">Ultimos articulos</h1>
            <Articles home="true" />
            {/* <ArticlesHome /> */}
          </div>
          <Sidebar />
        </div>
      </>
    );
  }
}

export default Home;
