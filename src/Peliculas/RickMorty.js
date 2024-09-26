import React, { Component } from 'react'

class RickMorty extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Rick y Morty 
                 </h1>
                <p className='DescriContenido'>
                La fórmula general en Rick y Morty consiste en la
                 yuxtaposición de dos escenarios que confluyen.
                Por un lado se muestran las aventuras que vive
                un abuelo extremadamente egoísta y alcohólico por
                lo vasto y desconocido del espacio intergaláctico
                 o interdimensional, el cual arrastra a su nieto para
                que viaje con él.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer21.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default RickMorty;
