import React, { Component } from 'react'

class BreakingBad extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                BreakingBad
                </h1>
                <p className='DescriContenido'>
                Un profesor de Química de secundaria con cáncer 
                terminal se asocia a un exestudiante para asegurar 
                el futuro de su familia al fabricar y vender metanfetamina.
                 Ve todo lo que quieras. "Breaking Bad" ganó 16 premios Emmy,
                  incluidos cuatro a mejor actor para la estrella Bryan Cranston.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer19.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default BreakingBad;
