import styled from "styled-components";

export const Container = styled.main`
display: flex;
justify-content: center;
flex-direction: column;
height: 100dvh;
padding: 0 3rem;
gap:1rem;

a{
        padding: 2rem;
    width: 35rem;
}

@media (max-width: 760px){
padding: 0;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
}

`



export const ContainerButtons = styled.span`
    display: grid;
    gap: 2rem;
    button{

    }
`
export const Button = styled.button`

`

export const Text = styled.div`
margin-top: 5rem;
font-size: 1.8rem;
overflow: hidden;
color: #fff;
white-space: nowrap;


`