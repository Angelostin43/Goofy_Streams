import React, { Component } from 'react'
import { ReproducirAjio } from './ReproducirAjio';
import { Navigate, Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          user: null,
          redirigirPerfil: false,
          redirigirRegistrarse: false,
        };
      }
    
      handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { username, password, user } = this.state;
        if (user && user.username === username && user.password === password) {
          alert(`Bienvenido ${username}`);
          this.setState({ redirigirPerfil: true });
        } else {
          alert('El usuario no existe');
          this.setState({ redirigirRegistrarse: true });
        }
      };
    
      componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({ user });
      }
    
      render() {
        const { username, password, redirigirPerfil, redirigirRegistrarse } = this.state;
        if (redirigirPerfil) {
            return <Navigate to="/perfil" />;
          }
        
          if (redirigirRegistrarse) {
            return <Navigate to="/registrarse" />;
          }
        return (
          <div id="Section" > 
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input type='text' name='username' value={username} onChange={this.handleInputChange} placeholder='Nombre de usuario' required />
            <input type='password' name='password' value={password} onChange={this.handleInputChange} placeholder='Contraseña' required />
            <input type='submit' value='Ingresar' />
            <Link to="/registrarse">
              <button onClick={ReproducirAjio} id="BotonRegistrarse">Registrarse</button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </form>
          </div>
        );
      }
}

export default Login;
