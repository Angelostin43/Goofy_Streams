import React, { Component } from 'react'

class GatoConBotas extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    El Gato Con Botas
                </h1>
                <p className='DescriContenido'>
                Es un gato que lucha como un mosquetero, aunque lo que más se caracteriza de él son sus botas, 
                que es lo que le da nombre. Nació en España. Poniendo una cara triste puede conseguir todo lo que quiere, 
                haciendo que los demás le vean como un "minino tierno".
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer11.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default GatoConBotas;
