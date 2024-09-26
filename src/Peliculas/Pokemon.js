import React, { Component } from 'react'

class Pokemon extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Pokemon Horizontes
                </h1>
                <p className='DescriContenido'>
                La descripción oficial de Horizontes 
                Pokémon promete “una apasionante aventura
                 con nuevos personajes”. “Liko y Rod poseen
                  unos misteriosos objetos, un colgante y una
                   Poké Ball de aspecto único, pero para comprender 
                   su significado tendrán que dar un paso adelante.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer24.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Pokemon;
