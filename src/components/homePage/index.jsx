import React, { useState } from "react";

import { Container, ContainerButtons, Text } from "./styles";
export function Section() {
    const [load, setLoad] = useState(false)

    function downloadCurr() {
        setLoad(true)


        const anchor = document.getElementById("curriculum")
        anchor.href = "../../../public/marcosillvestre.pdf"

        setTimeout(() => {

            anchor.download = "curriculo marcos silvestre"
            setLoad(false)
        }, 5000);
    }



    return (
        <Container load={load}>
            <Text>
                Olá, sou o Marcos, <br />
                sou <p className="dev">Desenvolvedor Fullstack</p>
            </Text>

            <ContainerButtons>

                <a
                    href="https://github.com/marcosillvestre"
                    target='#blank'
                    className='button'
                >

                    Git Hub
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth=".7" stroke="currentColor" class="size-6">
                        <path strokeLinecap="round"
                            strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </a>

                {
                    window.innerWidth > 768 ?
                        <a
                            // href="../../../public/marcosillvestre.pdf"
                            // download={true}
                            className='curriculum'
                            id="curriculum"
                            onClick={() => downloadCurr()}
                        >
                            meu melhor currículo
                        </a> :
                        <a
                            href="../../../public/marcosillvestre.pdf"
                            download={true}
                            className='curriculum'
                        >
                            meu melhor currículo
                        </a>


                }
            </ContainerButtons>


        </Container>
    )
}