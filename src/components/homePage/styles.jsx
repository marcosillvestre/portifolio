import styled from "styled-components";

export const Container = styled.main`
display: flex;
justify-content: center;
flex-direction: column;
height: 100dvh;
padding: 0 3rem;
gap:1rem;

@media (max-width: 760px){
padding: 0;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
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




@media (max-width: 920px){

.dev{
    /* font-size: 1.2rem; */
}
@keyframes typing {
    from{
    width: 0;
    }
    to{
    width: 21.2rem;
    }
}
}
`