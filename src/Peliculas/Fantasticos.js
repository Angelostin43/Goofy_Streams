import React, { Component } from 'react'

class Fantasticos extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                   Animales Fantasticos
                </h1>
                <p className='DescriContenido'>
                Sinopsis. Adaptación del libro homónimo de J.K. Rowling, un spin-off que amplía el mundo 
                de la saga Harry Potter desde el punto de vista de Newt Scamander, un mago a quien le encargan
                escribir un libro sobre seres fantásticos. Se ambientará setenta años antes de lo narrado en las 
                películas del joven mago Harry.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer7.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Fantasticos;
