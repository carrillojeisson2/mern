import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Peliculas extends Component {
  // eslint-disable-next-line no-undef
  state = {
    peliculas: [
      {
        titulo: "uno",
        image:
          "https://i.pinimg.com/736x/6d/4c/35/6d4c3598dc4dcc40726a690278dacb01.jpg",
      },
      {
        titulo: "dos",
        image:
          "https://i.pinimg.com/736x/6d/4c/35/6d4c3598dc4dcc40726a690278dacb01.jpg",
      },
      {
        titulo: "tres",
        image:
          "https://i.pinimg.com/736x/6d/4c/35/6d4c3598dc4dcc40726a690278dacb01.jpg",
      },
    ],
    nombre: "Kanuto Lunatico",
    favorita: {},
  };

  // const [peliculas, setPeliculas] = useState(
  //   [
  //     {
  //       titulo: "uno",
  //       image:
  //         "https://i.pinimg.com/736x/6d/4c/35/6d4c3598dc4dcc40726a690278dacb01.jpg",
  //     },
  //     {
  //       titulo: "dos",
  //       image:
  //         "https://i.pinimg.com/736x/6d/4c/35/6d4c3598dc4dcc40726a690278dacb01.jpg",
  //     },
  //     {
  //       titulo: "tres",
  //       image:
  //         "https://i.pinimg.com/736x/6d/4c/35/6d4c3598dc4dcc40726a690278dacb01.jpg",
  //     },
  //   ],
  //  { nombre: "Kanuto Lunatico"},
  //  {favorita: [],}
  //   );

  favorita = (pelicula, indice) => {
    console.log("favorita");
    console.log(indice);
    this.setState({
      favorita: pelicula,
    });
  };

  render() {
    var pStyle = {
      background: "green",
      color: "white",
      padding: "10px",
    };

    var pStyleNo = {
      background: "red",
      color: "white",
      padding: "10px",
    };
    return (
      <>
        <Slider titulo=" Peliculas" size="slider-small" />

        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="subheader">Peliculas</h2>
            <p>Lorem ipsum dolor sit amet.</p>

            {this.state.favorita.titulo ? (
              <p className="favorita" style={pStyle}>
                <strong>La pelicula favorita es:</strong>
                <span>{this.state.favorita.titulo}</span>
              </p>
            ) : (
              <p className="favorita" style={pStyleNo}>
                No hay peliculas favoritas
              </p>
            )}

            <div id="articles" className="peliculas">
              {this.state.peliculas.map((pelicula, i) => {
                return (
                  <Pelicula
                    key={i}
                    pelicula={pelicula}
                    marcarFavorita={this.favorita}
                    indice={i}
                  />
                );
              })}
            </div>
          </div>
          <Sidebar blog="false" />
        </div>
      </>
    );
  }
}

export default Peliculas;
