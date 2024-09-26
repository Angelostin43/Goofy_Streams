import React, { Component } from 'react'

class MegaLodon2 extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Megalodon 2
                </h1>
                <p className='DescriContenido'>
                La película trata sobre un equipo de investigación que se ha sumergido 
                en el mar para explorar las profundidades. Esta aventura se vuelve un caos
                porque el grupo debe enfrentarse a dos Megalodones y también a saqueadores
                medioambientales
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer15.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default MegaLodon2;
