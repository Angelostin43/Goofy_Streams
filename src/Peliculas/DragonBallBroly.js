import React, { Component } from 'react'

class DragonBallBroly extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                DragonBall Super Broly 
                </h1>
                <p className='DescriContenido'>
                Broly es un Saiyajin que posee un poder gigantesco e incontrolable, 
                el cual se manifiesta en toda su magnitud cuando se convierte en el
                 Super Saiyajin Legendario. Incluso cuando apenas era un bebé su nivel 
                 de poder alcanzaba cifras inmensas que provocaban asombro y preocupación
                  entre los de su raza.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default DragonBallBroly;
