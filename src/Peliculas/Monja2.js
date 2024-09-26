import React, { Component } from 'react'

class Monja2 extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                La Monja 2
                </h1>
                <p className='DescriContenido'>
                'La Monja 2' se ambienta en la Francia de los años 50.
                 Tras el asesinato de un sacerdote, las fuerzas del mal 
                 se están extendiendo. La hermana Irene una vez más se
                  encuentra cara a cara con Valak, la monja demonio.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer18.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Monja2;
