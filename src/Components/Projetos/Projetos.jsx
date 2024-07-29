import React from "react";
import "./Projetos.css";
// imagens
import img6 from '../../Assets/image6.jpg'
import img9 from '../../Assets/image9.jpg'
import img5 from '../../Assets/image5.jpg'
import img4 from '../../Assets/image4.jpg'
// icones
import {  AiFillYoutube } from "react-icons/ai";
import {FiGithub} from 'react-icons/fi'

const data = [
    {
        id: 1,
        Image: img6,
        liveLink:"https://www.youtube.com/watch?v=8w2U5J8nAOA&t=428s",
        gitHub:"https://github.com/LoacirRibeiro/tripWebSite",
        title:"Tripwebsite",
        desc:"Olá, estamos compartilhando com você um site React Travel and Tour limpo e responsivo. É composto por Hooks, Biblioteca Aos (Animação), React-Icons e fundo de vídeo, acompanhe o tutorial.",
        tech1:"HTML",
        tech2:"Sass",
        tech3:"JavaScrip",
        tech4:"React",
    },
    {
        id: 2,
        Image: img9,
        demo:"https://www.youtube.com/watch?v=309beMyhXtg&t=1501s",
        liveLink:"",
        gitHub:"https://github.com/LoacirRibeiro/Travel",
        title:"Travel",
        desc:"Olá, estamos compartilhando com você um site React Travel and Tour limpo e responsivo. É composto por Hooks, Aos Library (Animação), React-Icons e fundo de vídeo. ",
        tech1:"HTML",
        tech2:"Sass",
        tech3:"JavaScrip",
        tech4:"React",
    },
    {
        id: 3,
        Image: img5,
        demo:"https://www.youtube.com/watch?v=WBp3QE7xQIo&t=1062s",
        liveLink:"",
        gitHub:"https://github.com/LoacirRibeiro/real-estate-website",
        title:"real estate website",
        desc:"Olá, estamos compartilhando com você um site React Travel and Tour limpo e responsivo. É composto por Hooks, Aos Library (Animação), React-Icons e fundo de vídeo. ",
        tech1:"HTML",
        tech2:"Sass",
        tech3:"JavaScrip",
        tech4:"React",
    },
    {
        id: 4,
        Image: img4,
        demo:"https://www.youtube.com/watch?v=AE0SBlavsmA",
        liveLink:"",
        gitHub:"https://github.com/LoacirRibeiro/wander-website",
        title:"wander",
        desc:"Este é um projeto React estático e limpo para um site de passeios. Pilha de tecnologia Reagir Js, SCSS, Aos animação, Ícones e ganchos do React ",
        tech1:"HTML",
        tech2:"Sass",
        tech3:"JavaScrip",
        tech4:"React",
    },
]


function Projetos() {
  return (
    <section id="Projetos" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">01. </span>
        <h5 className="titleText">
           Projetos
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {
          data.map(({id, Image, demo, liveLink, gitHub, title, desc, tech1, tech2, tech3, tech4}) =>{
            return(
              <div key={id} className="singleProject">
                  <div className="externalLink flex">
                    <div className="youtubeIcon">
                      <a href={demo} target='_blank '>
                        <AiFillYoutube className="icon"/>
                      </a>
                    </div>
                    <div className="githubIcon">
                      <a href={gitHub} target='_blank '>
                        <FiGithub className="icon"/>
                      </a>
                    </div>
                  </div>

                  <div className="imgDiv">
                    <a href={liveLink} target="_blank ">
                      <img src={Image} alt={title}></img>
                    </a>
                  </div>

                  <div className="projectTitle">
                    <h3>{title}</h3>
                  </div>

                  <div className="desc">
                    {desc}
                  </div>

                  <div className="technologies flex">
                    <small>{tech1}</small>
                    <small>{tech2}</small>
                    <small>{tech3}</small>
                    <small>{tech4}</small>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Projetos;
