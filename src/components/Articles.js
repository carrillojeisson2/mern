import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";
import Global from "../Global";
import noImage from "../assets/images/noimage.jpg";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

const baseUrl = Global.url;

// componentDidMount() {
// this.getArticles();
// }
// const Articles = () => {

//   const getArticles = () => {
//     console.log('sfc');
//   }

//   return (
//     <>
//       <h1>kanuto</h1>
//     </>
//   );
// };

// export default Articles;

// ------------------------------------------------------------------------------

class Articles extends React.Component {
  state = {
    articles: [],
    status: "error",
  };

  componentWillMount() {
    var home = this.props.home;
    var search = this.props.search;

    if (home === "true") {
      this.getLastArticles();
    } else if (search && search != null && search != undefined) {
      this.getArticlesBySearch(search);
    } else {
      this.getArticles();
    }
  }

  getArticles = () => {
    axios.get(baseUrl + "articles").then((res) => {
      this.setState({
        articles: res.data.articles,
        status: "succcess",
      });
      // console.log(this.state.articles);
    });
  };

  getArticlesBySearch = (search) => {
    axios
      .get(baseUrl + "search/" + search)
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          status: "succcess",
        });
      })
      .catch((err) => {
        this.setState({
          articles: [],
          status: "successs",
        });
      });
  };

  getLastArticles = () => {
    axios.get(baseUrl + "articles/last").then((res) => {
      if (res.data.articles) {
        this.setState({
          articles: res.data.articles,
          status: "succcess",
        });
      } else {
        this.setState({
          articles: res.data.articles,
          status: "fail",
        });
      }
      console.log(this.state.articles);
    });
  };

  render() {
    if (this.state.articles.length >= 1) {
      var listArticles = this.state.articles.map((article) => {
        return (
          <article
            key={article._id}
            className="article-item"
            id="article-template"
          >
            <div className="image-wrap">
              {article.image !== null ? (
                <img
                  src={baseUrl + "get-image/" + article.image}
                  alt={article.title}
                />
              ) : (
                <img src={noImage} alt="niImage" />
              )}
            </div>

            <h2>{article.title}</h2>
            <span className="date">
              <Moment locale="es" fromNow>
                {article.date}
              </Moment>
            </span>
            <Link to={"/blog/articulo/" + article._id}>Leer Mas</Link>

            <div className="clearfix"></div>
          </article>
        );
      });

      return <div id="articles">{listArticles}</div>;

      // return (
      //   <div id="articles">
      //     <h1>Listado de articulos</h1>
      //   </div>
      // );
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "successs"
    ) {
      return (
        <div id="articles">
          <h1>No hay articulos</h1>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h1>Cargando</h1>
        </div>
      );
    }
  }
}

export default Articles;

// --------------------------------------------------------------------

// export default function Articles({ home, search }) {
//   const [post, setPost] = React.useState([]);
//   const [estado, setEstado] = useState("error");

//   try {
//     useEffect(() => {
//       axios.get(baseUrl + "articles").then((response) => {
//         setPost(response.data.articles);
//         setEstado("success");
//       });
//     }, [setPost]);
//   } catch (error) {
//     console.log(error);
//   }

//   if (post.length >= 1) {
//     var listArticles = post.map((article) => {
//       return (
//         <article
//           key={article._id}
//           className="article-item"
//           id="article-template"
//         >
//           <div className="image-wrap">
//             {article.image !== null ? (
//               <img
//                 src={baseUrl + "get-image/" + article.image}
//                 alt={article.title}
//               />
//             ) : (
//               <img src={noImage} alt="niImage" />
//             )}
//           </div>

//           <h2>{article.title}</h2>
//           <span className="date">
//             <Moment locale="es" fromNow>
//               {article.date}
//             </Moment>
//           </span>
//           <Link to={"/blog/articulo/" + article._id}>Leer Mas</Link>

//           <div className="clearfix"></div>
//         </article>
//       );
//     });

//     return <div id="articles">{listArticles}</div>;
//   } else if (post === 0 && estado === "success") {
//     return (
//       <div id="articles">
//         <h1>No hay articulos para mostrar</h1>
//         <p>Aun no hay contenido en esta seccion</p>
//       </div>
//     );
//   } else {
//     return (
//       <div id="articles">
//         <h1>cargando</h1>
//       </div>
//     );
//   }
// }
