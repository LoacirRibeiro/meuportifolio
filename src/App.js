// React Developer Portfolio Tutorial with 9 in-built projects | PART ONE
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Sobre from './Components/Sobre/Sobre';
import Habilidades from './Components/Habilidades/Habilidades';
import Projetos from './Components/Projetos/Projetos';
import Contato from './Components/Contato/Contato';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </>
   );
}

export default App;
