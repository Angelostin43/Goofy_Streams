import React, { Component } from 'react'

class Oppen extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    Oppenheimer
                </h1>
                <p className='DescriContenido'>
                Oppenheimer aboga contra un mayor desarrollo nuclear, especialmente la bomba de hidrógeno, 
                lo que lo sitúa en el bando opuesto a su compañero del Proyecto Manhattan Edward Teller. 
                Su postura se convierte en un punto de discordia en el lado americano en medio de la tensa
                Guerra Fría con la Unión Soviética.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer4.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Oppen;
