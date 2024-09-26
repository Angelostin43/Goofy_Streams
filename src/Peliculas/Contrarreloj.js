import React, { Component } from 'react'

class Contrarreloj extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    Contrarreloj
                </h1>
                <p className='DescriContenido'>
                Liam Neeson personifica a Matt Turner, un hombre 
                de familia que tiene un negocio millonario. Por lo mismo, hace mucho tiempo 
                que dirige su concentración a su trabajo antes que a su familia, principalmente
                 antes que a su esposa.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer12.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Contrarreloj;
