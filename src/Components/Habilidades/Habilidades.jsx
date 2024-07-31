import React from "react";
import './Habilidades.css'
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { SiCss3, SiMysql } from "react-icons/si";
import { FaGitSquare, FaHtml5 } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

function Habilidades() {
    return(
        <section id= 'Habilidades' className="skills container section">
            <div className="sectionTitle">
                <span className="titleNumber">02</span>
                <h5 className="titleText"> Habilidades 
                    <div className="undeline"><span></span></div>
                </h5>
            </div>

            <div className="skillsContainer grid">
                {/* grupo de Habilidades */}
                <div className="skillGroup">
                    <div className="skillTitle">
                        <h2 className="title">Desenvolvimento web</h2>
                        <span className="subTitle">Estagiário</span>
                    </div>

                    <div className="generalSkills">
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <TbBrandReactNative className="icon"/>
                            </div>
                            <span className="skillName"> React </span>
                        </div>
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <RiNextjsLine className="icon"/>
                            </div>
                            <span className="skillName"> Next </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoJavascript className="icon"/>
                            </div>
                            <span className="skillName">JavaScritp</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoSass className="icon"/>
                            </div>
                            <span className="skillName"> Sass </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiCss3 className="icon"/>
                            </div>
                            <span className="skillName"> Css3 </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaHtml5 className="icon"/>
                            </div>
                            <span className="skillName"> HTLM </span>
                        </div>

                    </div>
                </div>
                <div className="skillGroup">
                    <div className="skillTitle">
                        <h2 className="title">Desenvolvimento web TJ-TO</h2>
                        <span className="subTitle">Estagiário</span>
                    </div>

                    <div className="generalSkills">
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <TbBrandReactNative className="icon"/>
                            </div>
                            <span className="skillName"> React </span>
                        </div>
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <RiNextjsLine className="icon"/>
                            </div>
                            <span className="skillName"> Next </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoJavascript className="icon"/>
                            </div>
                            <span className="skillName">JavaScritp</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoSass className="icon"/>
                            </div>
                            <span className="skillName"> Sass </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiCss3 className="icon"/>
                            </div>
                            <span className="skillName"> Css3 </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaHtml5 className="icon"/>
                            </div>
                            <span className="skillName"> HTML </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="skillsContainer grid">
                {/* grupo de Habilidades */}
                <div className="skillGroup">
                    <div className="skillTitle">
                        <h2 className="title">Outras experiências</h2>
                        <span className="subTitle">Estagiário</span>
                    </div>

                    <div className="generalSkills">
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaGitSquare className="icon"/>
                            </div>
                            <span className="skillName"> Git </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <AiFillGithub className="icon"/>
                            </div>
                            <span className="skillName"> GitHub </span>
                        </div>
                        
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiMysql className="icon"/>
                            </div>
                            <span className="skillName"> MySQL </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Habilidades;