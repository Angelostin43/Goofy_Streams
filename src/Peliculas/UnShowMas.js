import React, { Component } from 'react'

class UnShowMas extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Un Show Mas la pelicula
                </h1>
                <p className='DescriContenido'>
                Cuando una nave especial del futuro se estrella frente a Mordecai y Rigby,
                 un guerrero intergaláctico les advierte que un Tiempornado está a punto de 
                 destruir el Universo, ¡y ellos son los únicos que pueden detenerlo!
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer16.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default UnShowMas;
