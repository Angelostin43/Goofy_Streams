import React, { Component } from 'react'

class DragonBallSuper extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Dragon Ball Super
                </h1>
                <p className='DescriContenido'>
                Dragon Ball Super es un anime original producido por
                 Toei Animation bajo el guion escrito de Akira Toriyama.
                  Se trata de una secuela de la serie de anime Dragon Ball
                   Z que sigue las aventuras de Gokū y sus amigos durante el
                    lapso de diez años tras la derrota de Majin Boo.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer23.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default DragonBallSuper;
