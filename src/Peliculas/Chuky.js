import React, { Component } from 'react'

class Chuky extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Chuky
                </h1>
                <p className='DescriContenido'>
                Después de que un muñeco Chucky clásico aparece en una venta de garaje, 
                una idílica ciudad estadounidense se ve sumida en el caos cuando una serie 
                de horribles asesinatos comienzan a exponer las hipocresías y secretos de la
                ciudad.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer13.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Chuky;
