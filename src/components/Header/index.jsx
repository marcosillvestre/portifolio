import React from "react";
import less from '../../assets/less.png';
import sub from '../../assets/sub.png';
import Contact from '../../variables/contact';
import { ButtonsContainer, Contacts, Container } from "./styles";

export function Header() {

    function scroolSmooth(top) {
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        })
    }

    return (
        <Container >
            <div className="header" onClick={() => scroolSmooth(0)}>
                <span>
                    <img style={{ height: '18px' }} src={less} lt="less" />

                    <p> MV </p>

                    <img style={{ transform: 'rotate(-65deg)', height: '18px' }} src={sub} />

                    <img style={{ transform: 'rotate(-180deg)', height: '18px' }} src={less} />
                </span>


                <ButtonsContainer className="ctn">
                    <a className="anchor" href="#about">Sobre mim </a>
                    <a className="anchor" href="#project">Projetos</a>
                </ButtonsContainer>

            </div>

            <Contacts id="Contact" >

                <div >
                    {Contact &&
                        Contact.map(cont => (
                            <span key={cont.name}>

                                <a href={cont.link} >
                                    <img src={cont.icon} />
                                </a>
                            </span>
                        ))
                    }
                </div>

            </Contacts>

        </Container>
    )
}