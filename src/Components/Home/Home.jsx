import React from "react";
import './Home.css'
// import { AiFillFacebook, AiFillGithub, AiFillYoutube } from "react-icons/ai";
// import { FiTwitter } from "react-icons/fi";
import { TbArrowBigRightLines, TbChevronsDown } from "react-icons/tb";

function Home() {
    return(
        <section id='home' className="home section">
            {/* esta div só será visível em telas mais amplas */}
            {/* <div className="leftIcon">
                <div className="socials grid">
                    <a href="" target="_blank">
                        <AiFillGithub className="icon" />
                    </a>
                    <a href="" target="_blank">
                        <FiTwitter className="icon" />
                    </a>
                    <a href="" target="_blank">
                        <AiFillYoutube className="icon" />
                    </a>
                    <a href="" target="_blank">
                        <AiFillFacebook className="icon" />
                    </a>
                </div>
            </div> */}

            {/* homeContent */}
            <div className="container homeContainer"> 
                <span className="introText">
                    Oi, Meu nome é:
                </span>
                <h1 className="title">
                    Loacir Ribeiro
                </h1>
                <span className="subTitle">
                "Meu foco é desenvolver aplicativos e softwares web 
                escaláveis, que permitem a evolução contínua e 
                eficiente dos projetos."
                </span>
                <p className="homeParagraph">
                "Sigo padrões e estilos de codificação  para garantir 
                que cada projeto atenda exatamente às suas necessidades."
                </p>

                <div className="lowerHomeSectiion">
                    <button className="contactBtn">
                        <a href="#contato" className="flex">
                           Contato <TbArrowBigRightLines className="icon"/>
                        </a>
                    </button>

                    <div className="scrollDiv">
                        <a href="#sobre" className="flex">
                            <h6 className="scroll">Ver mais</h6> <TbChevronsDown className="icon" />
                        </a>
                    </div>
                </div>
            </div>

            {/* div com endereço de e-mail (também estará visível apenas em uma tela maior) */}
            {/* <div className="rigthEmail">
                <div>
                    <div className="emailAddress">
                        <a href="https://mailto:loacirr@gmail.com" target="-blank">
                            loacirr@gamil.com
                        </a>
                    </div>

                    <div className="line"></div> 

                </div>
            </div> */}
        </section>
    )
}

export default Home;