import React, { Component } from 'react'

class Jojos extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Jojos
                </h1>
                <p className='DescriContenido'>
                En 2011, en una prisión de Port St. Lucie, Florida; Jolyne
                 Cujoh, hija de Jotaro, es acusada injustamente de un delito
                  que no cometió y enviada a una prisión de máxima seguridad.
                   Mientras está encarcelada, ella lucha dentro de un largo complot 
                   acordado entre el villano no-muerto DIO y el ideólogo Enrico Pucci.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer22.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Jojos;
