import React, { Component } from 'react'

class DragonBallGods extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    DragonBall Z La Batalla de los Dioses
                </h1>
                <p className='DescriContenido'>
                La Batalla de los Dioses tiene lugar algunos años después
                 de la batalla con Majin Buu, la cual estableció el destino 
                 de todo el universo. Wiss, el Dios de la Creación, junto con
                  Bills, el Dios de la Destrucción, tienen la tarea de mantener
                   un cierto equilibrio en el universo.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer17.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default DragonBallGods;
