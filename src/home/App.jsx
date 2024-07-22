import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { AboutMe, Header, Section } from '../components';
import Projects from '../components/projects';
import { Container } from './styles';

function App() {

  useEffect(() => {
    aos.init({ duration: 2000 })
  }, [])


  return (
    <Container>
      <Header />

      <Section />

      <AboutMe />

      <Projects />



    </Container>
  )
}

export default App
