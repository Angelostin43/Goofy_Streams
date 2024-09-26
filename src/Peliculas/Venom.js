import React, { Component } from 'react'

class Venom extends Component {
    render() {
        return (
            <div id="Section" >
                <h1 className='TituloContenido'>
                    Venom
                </h1>
                <p className='DescriContenido'>
                    Protagonizada por Tom Hardy como Eddie Brock / Venom, junto a Michelle Williams, Riz Ahmed, Scott Haze y 
                    Reid Scott. En la película, el periodista Brock gana superpoderes después de convertirse en el anfitrión de 
                    un simbionte alienígena cuya especie planea invadir la Tierra.
                </p>
                <hr></hr>
                <video className="VideoContenido" controls>
                 <source src="../mp4/Trailer6.mp4" type="video/mp4"></source>
               </video>
               <hr></hr>
            </div>
        )
    }
}

export default Venom;
