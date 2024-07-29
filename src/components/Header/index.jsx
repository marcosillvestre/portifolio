import React, { useEffect, useState } from "react";
import less from '../../assets/less.png';
import sub from '../../assets/sub.png';
import Contact from '../../variables/contact';
import { ArroWDown, BoxHeader, ButtonsContainer, Contacts, Container } from "./styles";
export function Header() {

    function scroolSmooth(top) {
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        })
    }
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    let menu = document.querySelector(".handler")


    const handleScroll = () => {
        if (window.scrollY <= 10) {
            setVisible(true);
        } else {

            !visible && setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <BoxHeader active={open} visible={visible}>
            <Container>
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

            <span className="handler">
                <ButtonsContainer className="ctn" active={open && true}>
                    <a className="anchor" href="#about" onClick={() => setOpen(!open)}>Sobre mim </a>
                    <a className="anchor" href="#project" onClick={() => setOpen(!open)}>Projetos</a>
                </ButtonsContainer>

                <button
                    className="opener"
                    onClick={() => setOpen(!open)}
                >

                    <ArroWDown
                        sx={{ color: "#fff" }}
                        active={open && true}
                    />
                </button>

                <div className="outClick" onClick={() => setOpen(!open)}>
                </div>
            </span>
        </BoxHeader>

    )
}