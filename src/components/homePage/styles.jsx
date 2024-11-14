import styled from "styled-components";

export const Container = styled.main`
display: flex;
justify-content: center;
flex-direction: column;
height: 100dvh;
padding: 0 3rem;
gap:1rem;


    cursor:${props => props.load ? "wait" : ""} ;

@media (max-width: 760px){
padding: 0;
justify-content: center;
align-items: center;
gap: 2rem;

}

`

export const ContainerButtons = styled.span`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .curriculum{
        color: #fff;
        border: 1px dashed  rgba(105, 103, 103, 0.518);
        padding: 1rem;
        width: max-content;
        font-size: .8rem;

        &:hover{
            border:  1px solid #fff;
        background-color: rgba(105, 103, 103, 0.518);

        }
            }

@media (max-width: 760px){
    width: 100%;
    padding: 3rem;
a, .curriculum{
    text-align: center;
    width: 100%;
}
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