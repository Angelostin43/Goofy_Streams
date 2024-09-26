import React, { Component } from 'react';

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <div className="perfil-loading">Cargando...</div>;
    }

    return (
      <div id="Section" >
        <div className="perfil-container">
          <h1>Hola {user.username}</h1>
          <h2 className='GoofyTexto'>GoofyStreams</h2>
          <p>GoofyStreams es tu destino para las últimas películas y series. Ofrecemos una amplia variedad de géneros para satisfacer todos los gustos. ¡Disfruta de tus películas y series favoritas en la comodidad de tu hogar!</p>
          <p>Además, puedes guardar tus películas y series favoritas para verlas más tarde. ¡Explora, descubre y disfruta de lo mejor del cine y la televisión con GoofyStreams!</p>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Perfil;