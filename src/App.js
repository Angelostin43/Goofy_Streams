import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cabecera from './Cabecera';
import Desplegables from './Desplegables';
import Footer from './Footer';
import Section from './Section';
import Login from './Login'; 
import Registrarse from './Registrarse';
import Perfil from './Perfil';
import Venom from './Peliculas/Venom';
import Fantasticos from './Peliculas/Fantasticos';
import Oppen from './Peliculas/Oppen';
import FiveNight from './Peliculas/FiveNight';
import DragonBallHero from './Peliculas/DragonBallHero';
import BetterCall from './Peliculas/BetterCall';
import SpiderAcross from './Peliculas/SpiderAcross';
import GatoConBotas from './Peliculas/GatoConBotas';
import Contrarreloj from './Peliculas/Contrarreloj';
import Chuky from './Peliculas/Chuky';
import BakiHanma from './Peliculas/BakiHanma';
import MegaLodon2 from './Peliculas/MegaLodon2';
import UnShowMas from './Peliculas/UnShowMas';
import DragonBallGods from './Peliculas/DragonBallGods';
import Monja2 from './Peliculas/Monja2';
import BreakingBad from './Peliculas/BreakingBad';
import Narcos from './Peliculas/Narcos';
import DragonBallBroly from './Peliculas/DragonBallBroly';
import Jojos from './Peliculas/Jojos';
import DragonBallSuper from './Peliculas/DragonBallSuper';
import Pokemon from './Peliculas/Pokemon';
import Series from './Series';
import Ayuda from './Ayuda';
import RickMorty from './Peliculas/RickMorty';

function App() {
  return (
    <div className="">
      <Router>
        <Cabecera />
        <Desplegables />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/ayuda" element={<Ayuda/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/perfil" element={<Perfil />}/>
          <Route path="/fantasticos" element={<Fantasticos/>}/>
          <Route path="/oppen" element={<Oppen/>}/>
          <Route path="/five" element={<FiveNight/>}/>
          <Route path="/dragonhero" element={<DragonBallHero/>}/>
          <Route path="/bettercall" element={<BetterCall/>}/>
          <Route path="/spideracross" element={<SpiderAcross/>}/>
          <Route path="/gatobotas" element={<GatoConBotas/>}/>
          <Route path="/contrarreloj" element={<Contrarreloj/>}/>
          <Route path="/chuky" element={<Chuky/>}/>
          <Route path="/baki" element={<BakiHanma/>}/>
          <Route path="/mega2" element={<MegaLodon2/>}/>
          <Route path="/unshowmas" element={<UnShowMas/>}/>
          <Route path="/venom" element={<Venom/>}/>
          <Route path="/dragongods" element={<DragonBallGods/>}/>
          <Route path="/monja2" element={<Monja2/>}/>
          <Route path="/breabad" element={<BreakingBad/>}/>
          <Route path="/narcos" element={<Narcos/>}/>
          <Route path="/dragonbroly" element={<DragonBallBroly/>}/>
          <Route path="/jojos" element={<Jojos/>}/>
          <Route path="/dragonsuper" element={<DragonBallSuper/>}/>
          <Route path="/pokemon" element={<Pokemon/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/rickmorty" element={<RickMorty/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;