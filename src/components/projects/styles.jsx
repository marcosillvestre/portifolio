import styled from "styled-components";

export const Container = styled.section`
/* height: 90dvh; */
display: flex;
flex-direction: column;
color: #fff;
align-items: center;
gap: 50px;
padding: 5rem 0;
label{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    padding: 15px;
    gap: 10px;
    border: 2px solid #9758a6;
    border-radius: 5px;
    height: 30rem;

    h1,a {
        text-align: center;
        position: relative;
    }
    img{
        border-radius: 10px;
        transition: 500ms;

    @media(min-width: 860px){
    &:active{
        scale:.6;
        top: 0;
        left: 10%;
        right: 50%;
        position: absolute;
        z-index: 2;
    }
}
    }

    }


.wrapper{
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;

}

.blank-anchor{
    padding: 2rem;
    width: 35rem;
}
`
