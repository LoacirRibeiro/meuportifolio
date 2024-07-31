import React, { useState } from "react";
import './Navbar.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
    //código para alternar e desligar a barra de navegação em pequenos
    const [active, setActive ] = useState('navBar');

    //isso trará a barra de navegação do topo.
    const showNavBar = () => {
        setActive('navBar activeNavBar')
    }

    // vamos removere o navBar
    const removeNavBar = () => {
        setActive('navBar')
    }

    // o código ocultará uma cor de fundo no cabeçalho
    const [ activeHeader, setActiveHeader] = useState('header');
    const addBg = () => {
        if(window.scrollY >= 10){
            setActiveHeader('header activeHeader') 
        }
        else{
            setActiveHeader('header')
        }
    }
    window.addEventListener('scroll', addBg)

    return(
        // trocar 'header' por activeHeader
        <header className= {activeHeader}> 
            <div className="logoDiv">
                <h1 className="logo">
                    <a href='#home'>Ai.</a>
                </h1>
            </div>
            {/* trocar navBar por active */}
            <div className={active}> 
                <ul onClick={removeNavBar} className="navLists">
                    <li className="navItem">
                      <a href="#Sobre" className="navLink">
                        <span className="headerNumber">1.</span> Sobre</a>  
                    </li>
                    <li className="navItem">
                      <a href="#Habilidades" className="navLink">
                        <span className="headerNumber">2.</span> Habilidades</a>  
                    </li>
                    <li className="navItem">
                      <a href="#Projetos" className="navLink">
                        <span className="headerNumber">3.</span> Projetos</a>  
                    </li>
                    <li className="navItem">
                      <a href="#Contato" className="navLink">
                        <span className="headerNumber">4.</span> Contato</a>  
                    </li>
                    <button className='btn'>
                        <a href="#Sobre">Resumo</a>
                    </button>
                </ul>
                {/* adicionar removeNavBar*/}
                <div onClick={removeNavBar} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>
            {/* adicionar showNavBar */}
            <div onClick={showNavBar} className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>
        </header>
    )
}

export default Navbar;