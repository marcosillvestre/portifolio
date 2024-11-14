import React from 'react'
import proje from '../../variables/projects'
import { Container } from './styles'

const Projects = () => {
    return (
        <Container data-aos='fade-up'>
            <p className='title' id="project">Projetos Monetizados</p >

            <div className="wrapper">
                {
                    proje.map(project => (
                        <label key={project.name}>
                            <h1>{project.name}</h1>

                            <img src={project.img} alt="picture of the project" />

                            <p>{project.description}</p>

                            <a
                                target='#blank'
                                href={project.link}
                                className='anchor'
                            >
                                Vizualizar projeto
                            </a>
                        </label>

                    ))
                }
            </div>

            <a
                href="https://github.com/marcosillvestre"
                className='button blank-anchor'
                target='#blank'
            >
                Vizualizar mais projetos no GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".7" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </Container>
    )
}

export default Projects