import React, { Component } from 'react'

class DragonBallHero extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    DragonBall Super Super Hero
                </h1>
                <p className='DescriContenido'>
                La malvada organización Red Ribbon Army se reforma con nuevos y más 
                poderosos androides, Gamma 1 y Gamma 2 para buscar venganza.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer8.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default DragonBallHero;
