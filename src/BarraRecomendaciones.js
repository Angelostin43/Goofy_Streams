import React, {Component} from "react";
import { ReproducirAjio } from "./ReproducirAjio";

class BarraRecomendaciones extends Component {
  ManejarBoton = (index) => {
    this.props.AlternarReco(index);
    ReproducirAjio(); 
  };

  render() {
    return (
      <div className="BarraReco">
        <button onClick={() => this.ManejarBoton(0)}>1</button>
        <button onClick={() => this.ManejarBoton(1)}>2</button>
        <button onClick={() => this.ManejarBoton(2)}>3</button>
      </div>
    )
  };
}

export default BarraRecomendaciones;
