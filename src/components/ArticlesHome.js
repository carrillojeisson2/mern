import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";
import Global from "../Global";
import noImage from "../assets/images/noimage.jpg";
import { Link } from "react-router-dom";

const baseUrl = Global.url;

export default function ArticlesHome({ home }) {
  const [post, setPost] = React.useState([]);
  const [estado, setEstado] = useState("error");

  try {
    React.useEffect(() => {
      axios.get(baseUrl + "articles/last").then((response) => {
        setPost(response.data.articles);
        setEstado("success");
      });
    }, [setPost]);
  } catch (error) {
    console.log(error);
  }

  if (post.length >= 1) {
    var listArticles = post.map((article) => {
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
  } else if (post === 0 && estado === "success") {
    return (
      <div id="articles">
        <h1>No hay articulos para mostrar</h1>
        <p>Aun no hay contenido en esta seccion</p>
      </div>
    );
  } else {
    return (
      <div id="articles">
        <h1>cargando</h1>
      </div>
    );
  }
}
