import React, { Component } from 'react'

class SpiderAcross extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    Spider-Man Across Spider Verse
                </h1>
                <p className='DescriContenido'>
                La película se anunció oficialmente en noviembre de 2019 y 
                el trabajo de animación comenzó en junio de 2020, con un estilo 
                visual diferente para cada uno de los seis universos visitados por 
                los personajes. Con una duración de 140 minutos, es la película animada
                 más larga jamás producida por un estudio estadounidense.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer10.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default SpiderAcross;
