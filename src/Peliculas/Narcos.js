import React, { Component } from 'react'

class Narcos extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Narcos
                </h1>
                <p className='DescriContenido'>
                La verdadera historia de los poderosos y 
                violentos cárteles colombianos sirve de hilo 
                conductor en esta serie dramática de mafiosos 
                de gran realismo. Ve todo lo que quieras. Ganó 
                dos premios Fénix mexicanos en 2017 en las categorías 
                de mejor ensamble actoral y mejor serie de drama.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer20.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Narcos;
