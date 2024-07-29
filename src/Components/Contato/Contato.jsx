// www.emailjs.com

import React from "react";
import './Contato.css'
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLine } from "react-icons/tb";
import { AiFillFacebook, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

// emailJs
import {useRef} from "react";
import emailjs from 'emailjs-com'

function Contato() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_bnym1z8', 'template_dst5vnn', form.current, 
          'hJ8KK2rdwkFQoR-55')
       
        e.target.reset() //o formulário será enviado após o envio
    };
    return(
        <section id='Contato' className="contact section container ">
            <div className="sectionTitle">

                <span className="titleNumber">04. </span>
                    <h5 className="titleText"> Contato
                        <div className="underline"><span></span></div>
                    </h5>
            </div>

            <div className="contactContainer grid">
                <div className="socialContacts grid">
                    <h3>Fale comigo</h3>

                    <div className="cards grid">
                        <div className="card" >
                            <div>
                                <BsInstagram className="icon"/>
                            </div>
                            <h4>Instagram</h4>
                            <span className="username">
                                @loacirribeirobueno
                            </span>

                            <div>
                                <a href='https://www.instagram.com/loacirribeirobueno/' className="flex"  target="_blank ">
                                    enviar mensagem 
                                    <TbArrowBigRightLine className="icon" />
                                </a>
                            </div>
                        </div>

                        <div className="card" >
                            <div>
                                <AiFillLinkedin className="icon"/>
                            </div>
                            <h4>LinkedIn</h4>
                            <span className="username">
                                @loacirribeiro
                            </span>

                            <div>
                                <a href='https://www.linkedin.com/in/loacirribeiro/' className="flex" target="_blank ">
                                    enviar mensagem 
                                    <TbArrowBigRightLine className="icon" />
                                </a>
                            </div>
                        </div>

                        <div className="card" >
                            <div>
                                <AiFillFacebook className="icon"/>
                            </div>
                            <h4>FaceBook</h4>
                            <span className="username">
                                @loacirribeirobueno
                            </span>

                            <div>
                                <a href='https://www.facebook.com/loacir.bueno/' className="flex"  target="_blank ">
                                    enviar mensagem 
                                    <TbArrowBigRightLine className="icon" />
                                </a>
                            </div>
                        </div>

                        <div className="card" >
                            <div>
                                <AiOutlineTwitter className="icon"/>
                            </div>
                            <h4>twitter</h4>
                            <span className="username">
                                @loacirribeirobueno
                            </span>

                            <div>
                                <a href='https://twitter.com/loacir.bueno/' className="flex"  target="_blank ">
                                    enviar mensagem 
                                    <TbArrowBigRightLine className="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form grid">
                    <h3>Mande-me um email</h3>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Digite seu Nome" name="name"/>
                        <input type="email" placeholder="Digite seu E-mail" name="email"/>
                        <textarea name='message' placeholder="Digite sua Mensagem"/>
                        <button className="formBtn" type="submit" name="submit">
                            Enviar E-mail
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contato;