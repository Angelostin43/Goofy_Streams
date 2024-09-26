import React, { Component } from 'react'

class BetterCall extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    Better Call Saul
                </h1>
                <p className='DescriContenido'>
                Esta precuela de "Breaking Bad" nominada al Emmy narra la vida del picapleitos Jimmy McGill y
                 su transformación en Saul Goodman, el abogado de moral laxa. Ve todo lo que quieras. Esta precuela
                  de "Breaking Bad" fue nominada a los Emmy al mejor drama, mejor actor protagonista y actor de reparto.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer9.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default BetterCall;
