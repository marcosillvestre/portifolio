import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Mulish', sans-serif;
outline: none;
scroll-behavior: smooth;

.title{
text-align:center;
font-size: 110px;
margin-bottom: 25px;
background: linear-gradient(#444, #131212);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
}


    .anchor{
        text-decoration: none;
        color: #fff;
        position: relative;

        &::after {
        content: "";
        position: absolute;
        width: 80%;
        transform: scaleX(0);
        height: 2px;
        bottom: -7px;
        left: 0;
        background-color: #9758a6;

        transform-origin: bottom right;
        transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
        }

        &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        }
}

.button{

background-color: #4b48482a;
border-radius: 10px;
border: 1px solid #69676784;
font-size: 1.5rem;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
position: relative;

svg{
    position: absolute;
    right: -40px;
    height: 5rem;
    transition: 1s;
}
&:active{
}

&:hover{
    background-color: #69676784;
    svg{
        right: -10rem;
    }

}
@media (max-width: 760px){
width: 75%;
}
}


.dev{
    color: #9758a6;
    display: inline;
}

    @media (max-width: 768px){
    font-size: 80%;

    .title{
    font-size: 50px;
    }
    }

@media (max-width: 375px){
    font-size: 40%;
    } 


a{
    text-decoration: none;
    cursor: pointer;
}
}
`