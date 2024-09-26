import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const data = [
  { id: 1, name: 'Fantasticos', route: '/fantasticos' },
  { id: 2, name: 'Oppen', route: '/oppen' },
  { id: 3, name: 'FiveNight', route: '/five' },
  { id: 4, name: 'DragonBallHero', route: '/dragonhero' },
  { id: 5, name: 'BetterCall', route: '/bettercall' },
  { id: 6, name: 'SpiderAcross', route: '/spideracross' },
  { id: 7, name: 'GatoConBotas', route: '/gatobotas' },
  { id: 8, name: 'Contrarreloj', route: '/contrarreloj' },
  { id: 9, name: 'Chuky', route: '/chuky' },
  { id: 10, name: 'BakiHanma', route: '/baki' },
  { id: 11, name: 'MegaLodon2', route: '/mega2' },
  { id: 12, name: 'UnShowMas', route: '/unshowmas' },
  { id: 13, name: 'Venom', route: '/venom' },
  { id: 14, name: 'DragonBallGods', route: '/dragongods' },
  { id: 15, name: 'Monja2', route: '/monja2' },
  { id: 16, name: 'BreakingBad', route: '/breabad' },
  { id: 17, name: 'Narcos', route: '/narcos' },
  { id: 18, name: 'DragonBallBroly', route: '/dragonbroly' },
  { id: 19, name: 'Jojos', route: '/jojos' },
  { id: 20, name: 'DragonBallSuper', route: '/dragonsuper' },
  { id: 21, name: 'Pokemon', route: '/pokemon' },
];

class Buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
    };
    this.resultsRef = React.createRef();
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
  }

  handleBodyClick = (event) => {
    if (this.resultsRef.current && !this.resultsRef.current.contains(event.target)) {
      this.setState({ results: [] });
    }
  };

  realizarBusqueda = () => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    this.setState({ results });
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.realizarBusqueda();
    }
  };

  render() {
    return (
      <div id="Busqueda">
        <div id="BusquedaContenedor">
          <img src="../img/Lupa_icono_buscar.png" alt="Buscar" id="IconoBuscar" onClick={this.realizarBusqueda}/>
          <input type="text" id="TextoBusqueda" placeholder="Buscar..." onChange={this.handleInputChange} onKeyPress={this.handleInputKeyPress}/>
        </div>
        {this.state.results.length > 0 && (
          <div id="ResultadosBusqueda" ref={this.resultsRef}>
            {this.state.results.map(item => (
              <Link key={item.id} to={item.route}>{item.name}</Link>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Buscar;