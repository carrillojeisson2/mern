import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/react.svg";

class Header extends Component {
  render() {
    return (
      <>
        <header id="header">
          <div className="center">
            {/* <!-- LOGO --> */}
            <div id="logo">
              <img src={logo} className="app-logo" alt="Logotipo" />
              <span id="brand">
                <strong>Curso</strong>React
              </span>
            </div>

            {/* <!-- MENU --> */}
            <nav id="menu">
              <ul>
                <li>
                  <NavLink to="/home" exact activeClassName="active">
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/formulario">Formulario</NavLink>
                </li>
                <li>
                  <NavLink to="/peliculas">Peliculas</NavLink>
                </li>
                <li>
                  <NavLink to="/segunda-ruta">PAgina 2</NavLink>
                </li>
              </ul>
            </nav>

            {/* <!--LIMPIAR FLOTADOS--> */}
            <div className="clearfix"></div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
