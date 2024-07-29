import React from "react";
import './Sobre.css'
import { TbCloudDownload } from "react-icons/tb";
import img from '../../Assets/loacir.jpg'

function Sobre() {
    return(
        <section id="Sobre" className="about section container">

            <div className="sectionTitle">

                <span className="titleNumber">01. </span>
                <h5 className="titleText"> Sobre mim 
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="sectionContent grid">
                <div className="textSectiion">
                    <h4>
                    Sou um desenvolvedor web determinado e focado em 
                    acessibilidade, com experiência em HTML, csc, Sass, react.Js, 
                    next.js e JavaScript para construir páginas e sistemas 
                    acessíveis baseados em componentes. <br/>
                    Tenho a capacidade de fornecer resultados de alta qualidade 
                    enquanto colaboro em ambientes de trabalho dinâmicos e 
                    equipes em constante mudança. <br/>
                    Sou apaixonado por aprender novas tecnologias e estou sempre 
                    em busca de me tornar um desenvolvedor melhor a cada dia, 
                    determinado e orientado para resultados.
                    </h4>

                    <div className="aboutBtn">
                        <a href="Dimas UML.docx" download='Dimas UML.docx' className="flex">
                            Download CV <TbCloudDownload className="icon"/>
                        </a>
                    </div>
                </div>

                <div className="aboutImgDiv">
                    <img src={img} alt='loacir' className="aboutImg"/>
                </div>
            </div>
        </section>
    )
}

export default Sobre;