import styled from "styled-components";


export const Container = styled.main`
padding: 0 3rem;
font-size: medium;
height: 130dvh;

`

export const About = styled.main`
color: #fff;
text-align: center;
display: flex;
justify-content: space-around;
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    text-align: start;
    width: 60%;
}

@media(max-width:760px){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .container{
    width: 100%;
    font-size: medium;
    text-align: start;
    }
}

`

export const ThirdImage = styled.img`
aspect-ratio: 1/2;
border: 1px dashed #fff;
border-radius: 30px;
height: 30rem;
width: 20rem;

`

export const Skills = styled.div`
width: 100%;
strong{
    font-size: 32px;
}

ul{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
li{
    list-style: none;
    background-color: #fff; 
    color: black;
    border-radius: 6px;
    text-align: center;
    padding: 2px;

}
img{
    height: 30px;
    padding: 2px;
}
}
`