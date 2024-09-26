import React, { Component } from 'react'

class BakiHanma extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                Baki Hanma
                </h1>
                <p className='DescriContenido'>
                Narra la historia de Baki Hanma, un prometedor luchador 
                de artes marciales que tras superar todo entrenamiento sin
                complicaciones en pos de batir a su padre, Yujiro Hanma,
                se ve derrotado sin dificultades por este mismo.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer14.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default BakiHanma;
