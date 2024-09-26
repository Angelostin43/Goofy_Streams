import React, { Component } from "react";
import BarraRecomendaciones from "./BarraRecomendaciones";
import { Link } from "react-router-dom";

const trailers = ["../mp4/Trailer1.mp4", "../mp4/Trailer2.mp4", "../mp4/Trailer3.mp4", "../mp4/Trailer4.mp4", "../mp4/Trailer5.mp4"];

class Recomendaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActivarRecomendacion: 0,
    };
  }

  AlternarReco = (index) => {
    this.setState({ ActivarRecomendacion: index });
  };

  render() {
    const ContenidoRecomendaciones = [
      <div className="Recomendaciones" key={1}>
        <div className="imagenContainer">
          <img src="../img/oppenheimer.jpg" alt="Oppenheimer" />
          <Link to="/oppen">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/FantasticosB.png" alt="Los Fantásticos" />
          <Link to="/fantasticos">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/FnafBanner.png" alt="Five Nights at Freddy's" />
          <Link to="/five">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/DragonBallSuperSuperHero.png" alt="Dragon Ball Super: Super Hero" />
          <Link to="/dragonhero">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/BetterCallSaul.jpg" alt="Better Call Saul" />
          <Link to="/bettercall">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Spiderman.jpg" alt="Spider-Man" />
          <Link to="/spideracross">Comenzar a ver!</Link>
        </div>
      </div>,
      <div className="Recomendaciones" key={2}>
        <div className="imagenContainer">
          <img src="../img/ElGatoConBotas.jpg" alt="El Gato con Botas" />
          <Link to="/gatobotas">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Contrarreloj.jpg" alt="Contrarreloj" />
          <Link to="/contrarreloj">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Chuky.jpg" alt="Chucky" />
          <Link to="/chuky">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Baki.jpg" alt="Baki" />
          <Link to="/baki">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Meg2.jpg" alt="Meg 2" />
          <Link to="/mega2">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Regular_Show.webp" alt="Regular Show" />
          <Link to="/unshowmas">Comenzar a ver!</Link>
        </div>
      </div>,
      <div className="Recomendaciones" key={3}>
        <div className="imagenContainer">
          <img src="../img/VenomB.png" alt="Venom" />
          <Link to="/venom">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/DragonBallZGods.png" alt="Dragon Ball Z: Battle of Gods" />
          <Link to="/dragongods">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/La_Monja_2.png" alt="La Monja 2" />
          <Link to="/monja2">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/BreakingBad.jpg" alt="Breaking Bad" />
          <Link to="/breabad">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/Narcos.jpg" alt="Narcos" />
          <Link to="/narcos">Comenzar a ver!</Link>
        </div>
        <div className="imagenContainer">
          <img src="../img/DragonBallSuperBroly.jpg" alt="Dragon Ball Super: Broly" />
          <Link to="/dragonbroly">Comenzar a ver!</Link>
        </div>
      </div>,
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
                <source src={trailers[indice]} type="video/mp4" />
              </video>
              <div className="DelaSemana">
                <h1>Peliculas de la semana:</h1>
                <ul>
                  <li><Link to="/dragongods"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Dragon Ball Z: Battle of Gods</span></Link></li>
                  <li><Link to="/monja2"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>La Monja 2</span></Link></li>
                  <li><Link to="/five"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Five Night at Freddy's</span></Link></li>
                  <li><Link to="/oppen"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Oppenheimer</span></Link></li>
                </ul>
              </div>
              <div className="DelaSemana">
                <h1>Series de la semana:</h1>
                <ul>
                  <li><Link to="/breabad"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Breaking Bad</span></Link></li>
                  <li><Link to="/narcos"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Narcos</span></Link></li>
                  <li><Link to="/chuky"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Chuky</span></Link></li>
                  <li><Link to="/bettercall"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Better Call Saul</span></Link></li>
                </ul>
              </div>
              <div className="DelaSemana">
                <h1>Animes de la semana:</h1>
                <ul>
                  <li><Link to="/jojos"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Jojos</span></Link></li>
                  <li><Link to="/baki"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Baki</span></Link></li>
                  <li><Link to="/dragonsuper"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Dragon Ball Super</span></Link></li>
                  <li><Link to="/pokemon"><img src="../img/Flecha_icono.png" alt="Flecha" /><span>Pokemon</span></Link></li>
                </ul>
              </div>
            </aside>
          </div>
          <BarraRecomendaciones AlternarReco={this.AlternarReco} />
        </div>
      </div>
    );
  }
}

export default Recomendaciones;
