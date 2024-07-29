import gif2 from '../../assets/gif.gif'
import skills from '../../variables/skills'
import { About, Container, Skills, ThirdImage } from './styles'

export function AboutMe() {

    const timer = new Date().getFullYear() - new Date("01/01/2023").getFullYear()

    return (
        <Container>

            <p data-aos='fade-up' className='title' id='about'>Sobre mim</p>
            <About id="About" data-aos='fade-up'>

                <div className='container'>
                    <div >
                        Trabalho como Desenvolvedor Full Stack PJ há {timer} ano{timer > 1 && 's'}.

                        Hoje estou especializado em <p className='dev'>Javascript</p>, <p className='dev'>Node</p> e <p className='dev'>React</p>, mas tenho experiência em diversas tecnologias e ferramentas, incluindo <p className='dev'>PostgreSQL</p>, <p className='dev'>MySQL</p>, <p className='dev'>Docker</p>, <p className='dev'>Git</p> e <p className='dev'>Github</p>.

                        <br />
                        Aberto a novos desafios.
                        <br />
                        Sou capaz de desenvolver soluções para problemas complexos, revisar e projetar códigos eficientes e escaláveis. Além disso foco em princípios como SOLID, Clean Code e convenções de commit para garantir que o código seja de alta qualidade.
                        <br />
                        Sinta-se a vontade para entrar em contato comigo
                    </div>

                    <Skills >
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
            </About>

        </Container>
    )
}
