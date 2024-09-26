import React, { Component } from "react";
import { Link } from "react-router-dom";

class Desplegables extends Component {
    render() {
        return (
            <nav>
                <div id="Desplegables">
                    <div class="cuadro">
                        <Link to="/">
                            <span class="menu">Inicio</span>
                        </Link>
                    </div>

                    <div class="cuadro">
                        <span class="menu">Series</span>
                        <ul class="contenido">
                            <li><Link to="/breabad">Breaking bad</Link></li>
                            <li><Link to="/narcos">Narcos</Link></li>
                            <li><Link to="/chuky">Chuky</Link></li>
                            <li><Link to="/bettercall">Better call saul</Link></li>
                        </ul>
                    </div>

                    <div class="cuadro">
                        <span class="menu">Peliculas</span>
                        <ul class="contenido">
                            <li><Link to="/dragongods">Dragon Ball Z:Battle of Gods</Link></li>
                            <li><Link to="/monja2">La Monja 2</Link></li>
                            <li><Link to="/five">Five Night at Freddys</Link></li>
                            <li><Link to="/oppen">Oppenheimer</Link></li>
                        </ul>
                    </div>

                    <div class="cuadro">
                        <span class="menu">Anime</span>
                        <ul class="contenido">
                            <li><Link to="/jojos">Jojos</Link></li>
                            <li><Link to="/baki">Baki</Link></li>
                            <li><Link to="/dragonsuper">Dragon ball Super</Link></li>
                            <li><Link to="/pokemon">Pokemon</Link></li>
                        </ul>
                    </div>

                    <div class="cuadro">
                        <Link to="/ayuda">
                            <span class="menu">Ayuda</span>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Desplegables;