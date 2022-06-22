import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Article from "./components/Article";
import Blog from "./components/Blog";
import CreateArticle from "./components/CreateArticle";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Home from "./components/Home";
import MiComponente from "./components/MiComponente.";
import Peliculas from "./components/Peliculas";
import Search from "./components/Search";
import { SeccionPruebas } from "./components/SeccionPruebas";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/articulo/:id" component={Article} />
          <Route exact path="/blog/crear" component={CreateArticle} />

          <Route exact path="/blog/busqueda/:search" component={Search} />
          <Route
            exact
            path="/redirect/:search"
            render={(props) => {
              var search = props.match.params.search;
              return <Redirect to={"/blog/busqueda/" + search} />;
            }}
          />

          <Route exact path="/segunda-ruta" component={MiComponente} />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />

          <Route
            exact
            path="/pruebas/:id?"
            render={() => <h2 className="subheader">Pruebas page</h2>}
          />

          <Route component={Error} />
        </Switch>

        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
