import React, { Component } from "react";
import { Link } from "react-router-dom";

const banners = [
  {img: "/img/banner1.png", link: "/five"},
  {img: "/img/banner2.png", link: "/breabad"},
  {img: "/img/banner3.jpg", link: "/dragonbroly"},
  {img: "/img/banner4.jpg", link: "/oppen"},
  {img: "/img/banner5.jpg", link: "/rickmorty"}
];

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      c: (prevState.c + 1) % banners.length
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      c: (prevState.c - 1 + banners.length) % banners.length
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.handleNext, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="ImagenesBanner">
        <img className="navImage1" src="../img/Flecha_icono.png" alt="Anterior" onClick={this.handlePrev} />
        <Link className="linkbanners" to={banners[this.state.c].link}>
        <img className="Banner" src={banners[this.state.c].img} alt={`Banner ${this.state.c + 1}`} />
        </Link>
        <img className="navImage2" src="../img/Flecha_icono.png" alt="Siguiente" onClick={this.handleNext} />
      </div>
    );
  }
}

export default Banner;