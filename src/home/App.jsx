import React, { useEffect } from "react";
import skills from "../variables/skills";
// import gif from '../assets/gif.gif';
import aos from 'aos';
import 'aos/dist/aos.css';
import gif2 from '../assets/gif.gif';
import pic from '../assets/hw.gif';
import less from '../assets/less.png';
import sub from '../assets/sub.png';
import Contact from "../variables/contact";
import Projects from '../variables/projects';
import { AboutMe, ButtonsContainer, Contacts, Container, Header, Less, Project, Resume, SeccImage, Section, Skills, Sub, Text, ThirdImage, Title } from './styles';

function App() {

  function scroolSmooth(top) {
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    aos.init({ duration: 2000 })
  }, [])


  return (
    <Container>
      <Header>
        <p onClick={() => scroolSmooth(0)}> <img src={less} alt="less" /> Marcos Silvestre <Sub src={sub} /> <Less src={less} /></p>
        <ButtonsContainer>
          <a onClick={() => scroolSmooth(975)}>Sobre mim </a>
          <a onClick={() => scroolSmooth(2200)}>Projetos</a>
          <a onClick={() => scroolSmooth(2200)}>Contato</a>
        </ButtonsContainer>
      </Header>

      <Section>
        <Text>
          Olá, sou o Marcos e
          sou <a className="dev">Desenvolvedor</a> web
        </Text>
        <SeccImage src={pic} alt="picture" />
      </Section>

      <Title data-aos='fade-up'>Sobre mim</Title>
      <AboutMe id="About" data-aos='fade-up'>

        <div>
          <Resume className="div1">
            De Minas Gerais, tenho 20 anos e estou em transição de carreira.
            No momento estou cursando Engenharia de Software pela Estácio.
            Sou realmente apaixonado pela área de tecnologia, sou fã do desafio de sempre aprender algo novo.
            Estudo desenvolvimento desde 2020 que foi onde tive o meu primeiro contato
            com programação. Hoje possuo conhecimentos em Front-End e Back-End ambos
            utilizando <a className="dev" big >JavaScript</a>. Atualmente estou imerso em estudos utilizando React
            e NodeJs.
          </Resume>

          <Skills className="div2">
            <ul>
              <strong>Skills</strong>

              {skills.map(skill => (
                <li key={skill.name}>
                  <img src={skill.img} />
                  <p>{skill.name}</p>
                </li>

              ))}
            </ul>
          </Skills>
        </div>

        <ThirdImage src={gif2} className='div3' />
      </AboutMe>

      <Project id="Projects" data-aos='fade-up'>
        <Title>Projetos</Title>
        <div className="wrapper">
          {
            Projects.map(project => (
              <span key={project.name}>
                <p>{project.name}</p>
                <p>{project.description}</p>
                <a href={project.link}>Vizualizar projeto </a>
              </span>

            ))
          }
        </div>

        <a
          style={{ margin: '0 43.5%', width: '400px' }}
          href="https://github.com/marcosillvestre">
          Vizualizar mais projetos no GitHub
        </a>

      </Project>

      <Contacts id="Contact" data-aos='fade-up'>

        <div >
          {Contact &&
            Contact.map(cont => (
              <span key={cont.name}>

                <a href={cont.link} >
                  <img src={cont.icon} />
                </a>
                <p>{cont.name}</p>
              </span>
            ))
          }
        </div>



      </Contacts>

    </Container>
  )
}

export default App
