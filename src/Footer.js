import React, { Component } from "react";
import { ReproducirAjio } from "./ReproducirAjio";

class Footer extends Component {
  render() {
    return (
      <div id="Pie">
        <footer>
          <div id="FooterParrafo">
            <p><strong>2023-2023 Goofy Streams</strong></p>
          </div>
          <div id="Redes">
            <a onClick={ReproducirAjio} href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="../img/facebook.png" alt="Facebook" id="ImagenRedes" />
            </a>
            <a onClick={ReproducirAjio} href="https://www.X.com" target="_blank" rel="noreferrer">
              <img src="../img/X.avif" alt="X" id="ImagenRedes" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
