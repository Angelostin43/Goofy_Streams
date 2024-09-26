import React, {Component} from "react";


class Ayuda extends Component{
    render(){
        return (
        <div id="Section" >
            <div id="SeccionAyuda">
                <h1 id="TituloAyuda">Ayuda</h1>
                <p id="Relleno">¡Alguna sugerencia, duda o fallo no dude en contactarnos!</p>
            </div>
            <div id="SeccionCorreo"> 
            <figure className='lol'>
                <p id='ajustartext'>Angelo@gmail.com</p>
                <img id='textderecha' src="../img/CorreoGmail.png"></img>
            </figure>
            </div>
            <div id="SeccionCorreo1">
            <figure className='lol'>
                <p id='ajustartext'>david@gmail.com</p>
                <img id='textizquierda'src="../img/CorreoGmail.png"></img>
            </figure>
            </div>
            <div id="SeccionAyuda">
             <img className="imgDos" src="../img/MuchasGracias.png"></img>
            </div>
        </div>
        )
    }
}

export default Ayuda;