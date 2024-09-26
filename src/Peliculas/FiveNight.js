import React, { Component } from 'react'

class FiveNight extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    Five Night at Freddys
                </h1>
                <p className='DescriContenido'>
                Basado en el popular videojuego de terror, un hombre comienza un trabajo como guardia
                 de seguridad nocturno en el restaurante Freddy Fazbear's Pizza, donde descubre que los 
                 animatrónicos se mueven por la noche y matan a cualquiera que vean.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer1.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default FiveNight;
