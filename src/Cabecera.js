import { Link } from 'react-router-dom';
import React, {Component} from "react";
import { ReproducirAjio } from "./ReproducirAjio";
import Buscar from './Buscar';
import "./index.css";


class Cabecera extends Component{
    render(){
        return(
        <div id="Cabecera">
        <header>
          <div id="Titulo">
              <Link to="/">
                <img className="imgTitulo" src="../img/TituloImagen.png" alt="Logo" />
              </Link>
          </div>
          <Buscar/>
          <Link to="/login">
            <button onClick={ReproducirAjio} id="BotonIniciarSesion">Iniciar sesión</button>
          </Link>
          <Link to="/perfil">
            <img src="../img/PerfilGoofy.png" alt="Usuario" id="ImagenUsuario" />
          </Link>
        </header>
        </div>
        )
    }
}

export default Cabecera;