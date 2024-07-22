import React from "react";

import back from '../../assets/backg.jpeg';
import { Container, Text } from "./styles";


export function Section() {


    return (
        <Container style={{ backgroundImage: back }}>
            <Text>
                Olá, sou o Marcos, <br />
                sou <p className="dev">Desenvolvedor Fullstack</p>
            </Text>


            <a href="https://github.com/marcosillvestre" className='button'>

                Trabalhos recentes
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".7" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

            </a>

        </Container>
    )
}