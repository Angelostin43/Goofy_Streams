import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Series extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido2'>
                Series
                </h1>
                <p className='DescriContenido2'>
                Series Disponibles:
                </p>
                <li><Link to="/breabad">Breaking bad</Link></li>
                <li><Link to="/narcos">Narcos</Link></li>
                <li><Link to="/chuky">Chuky</Link></li>
                <li><Link to="/bettercall">Better call saul</Link></li>

                <li><Link to="/bettercall">Better call saul</Link></li>
                <li><Link to="/bettercall">Better call saul</Link></li>
                <li><Link to="/bettercall">Better call saul</Link></li>
                <li><Link to="/bettercall">Better call saul</Link></li>
                <li><Link to="/bettercall">Better call saul</Link></li>
               
            </div>
        )
    }
}

export default Series;
