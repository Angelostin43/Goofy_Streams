import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Registrarse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
        confirmarPassword: '',
        email: '',
      },
      redirigirLogin: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, confirmarPassword, email } = this.state.formData;

    if (password !== confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const user = { username, password, email };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Gracias por registrarte');
    this.setState({ redirigirLogin: true });
  };

  render() {
    const { formData, redirigirLogin } = this.state;

    if (redirigirLogin) {
      return <Navigate to="/login" />;
    }

    return (
      <div id="Section">
        <form className="registro-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={this.handleInputChange}
            placeholder="Nombre de usuario"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={this.handleInputChange}
            placeholder="Contraseña"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={this.handleInputChange}
            placeholder="Confirmar contraseña"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={this.handleInputChange}
            placeholder="Correo electrónico"
            required
          />
          <input type="submit" value="Registrarse" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Registrarse;
