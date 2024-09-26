import React, { Component } from "react";
import BarraRecomendaciones from "./BarraRecomendaciones";
import { Link } from "react-router-dom";

const trailers = ["../mp4/Trailer1.mp4", "../mp4/Trailer2.mp4", "../mp4/Trailer3.mp4", "../mp4/Trailer4.mp4", "../mp4/Trailer5.mp4"];

class Recomendaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0,
      ActivarRecomendacion: 0
    };
  }

  state = {
    c: 0,
  };

  AlternarReco = (index) => {
    this.setState({ ActivarRecomendacion: index });
  };

  render() {
    const ContenidoRecomendaciones = [
      <div className="Recomendaciones" key={1}>
        <div className="imagenContainer">
          <img src="../img/oppenheimer.jpg" />
          <Link to="/oppen">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/FantasticosB.png" />
          <Link to="/fantasticos">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/FnafBanner.png" />
          <Link to="/five">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/DragonBallSuperSuperHero.png" />
          <Link to="/dragonhero">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/BetterCallSaul.jpg" />
          <Link to="/bettercall">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Spiderman.jpg" />
          <Link to="/spideracross">Comenzar a ver!</Link>
        </div>
      </div>,
      <div className="Recomendaciones" key={2}>
        <div className="imagenContainer">
          <img src="../img/ElGatoConBotas.jpg" />
          <Link to="/gatobotas">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Contrarreloj.jpg" />
          <Link to="/contrarreloj">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Chuky.jpg" />
          <Link to="/chuky">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Baki.jpg" />
          <Link to="/baki">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Meg2.jpg" />
          <Link to="/mega2">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Regular_Show.webp" />
          <Link to="/unshowmas">Comenzar a ver!</Link>
        </div>
      </div>,
      <div className="Recomendaciones" key={3}>
        <div className="imagenContainer">
          <img src="../img/VenomB.png" />
          <Link to="/venom">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/DragonBallZGods.png" />
          <Link to="/dragongods">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/La_Monja_2.png" />
          <Link to="/monja2">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/BreakingBad.jpg" />
          <Link to="/breabad">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Narcos.jpg" />
          <Link to="/narcos">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/DragonBallSuperBroly.jpg" />
          <Link to="/dragonbroly">Comenzar a ver!</Link>
        </div>
      </div>
    ];
    const indice = Math.floor(Math.random() * trailers.length);
    return (
      <div className="Recomendaciones">
        <div id="Subtitulo">
          <h1 id="TituloReco">Recomendaciones:</h1>
          <div className="RecomendacionesContainer">
            {ContenidoRecomendaciones[this.state.ActivarRecomendacion]}
            <aside id="CuadroDerecha">
              <video className="VideoTrailer" controls>
                <source src={trailers[indice]} type="video/mp4"></source>
              </video>
              <div class="DelaSemana">
                <h1>
                  Peliculas de la semana:
                </h1>
                <ul>
                  <li><Link to="/dragongods"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Dragon Ball Z: Battle of Gods</span></Link></li>
                  <li><Link to="/monja2"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>La Monja 2</span></Link></li>
                  <li><Link to="/five"><img src="../img/Flecha_icono.png" alt="Flecha" />Five Night at Freddys</Link></li>
                  <li><Link to="/oppen"><img src="../img/Flecha_icono.png" alt="Flecha" />Oppenheimer</Link></li>
                </ul>
              </div>
              <div class="DelaSemana">
                <h1>
                  Series de la semana:
                </h1>
                <ul>
                  <li><Link to="/breabad"><img src="../img/Flecha_icono.png" alt="Flecha" />Breaking bad</Link></li>
                  <li><Link to="/narcos"><img src="../img/Flecha_icono.png" alt="Flecha" />Narcos</Link></li>
                  <li><Link to="/chuky"><img src="../img/Flecha_icono.png" alt="Flecha" />Chuky</Link></li>
                  <li><Link to="/bettercall"><img src="../img/Flecha_icono.png" alt="Flecha" />Better call saul</Link></li>
                </ul>
              </div>
              <div class="DelaSemana">
                <h1>
                  Animes de la semana:
                </h1>
                <ul>
                  <li><Link to="/jojos"><img src="../img/Flecha_icono.png" alt="Flecha" />Jojos</Link></li>
                  <li><Link to="/baki"><img src="../img/Flecha_icono.png" alt="Flecha" />Baki</Link></li>
                  <li><Link to="/dragonsuper"><img src="../img/Flecha_icono.png" alt="Flecha" />Dragon ball Super</Link></li>
                  <li><Link to="/pokemon"><img src="../img/Flecha_icono.png" alt="Flecha" />Pokemon</Link></li>
                </ul>
              </div>
            </aside>
          </div>
          <BarraRecomendaciones AlternarReco={this.AlternarReco} />
        </div>
      </div>
    )
  };
}

export default Recomendaciones;