import styled from 'styled-components'

export const Container = styled.section`
background-color: #131212;

.dev{
    color: #9758a6;
    font-size: ${props => props.big ? '2.2rem' : '1.6rem'};
}

`
export const Header = styled.header`
display: flex;
padding: 1.5em 8em;
justify-content: space-between;
font-size: 1.3rem;
position: fixed;
z-index: 12;
margin-bottom:2em;
width: 100vw;
background-color: #131212;
color: #fff;
font-family: 'Mulish', sans-serif;
box-shadow: 0px 5px 13px -15px rgba(255,255,255,1);
p{
    display: flex;
    cursor: pointer;
    color: #fff;
    align-items: center;
    font-family: 'Mulish', sans-serif;
    font-size: 23px;
    
    img{
        height: 25px;
    }
}
`
//9758a6
export const ButtonsContainer = styled.div`
width: 400px;
display:flex;
gap: 50px;
align-items: center;

a{
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;

    position: relative;
    &::after {
    content: "";
    position: absolute;
    width: 90%;
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
`
export const Section = styled.section`
height: 100vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

/* flex-direction: column; */
gap: 5em;
`
export const Text = styled.p`
font-size: 2rem;
overflow: hidden;
color: #fff;
border-right: 2px solid #fff;
white-space: nowrap;
animation: blinkCursor 480ms infinite normal, typing 4s 1s normal;
.dev{
    color: #9758a6;
    font-size: 2.2rem;
}
@keyframes typing {
    from{
    width: 0;
    }
    to{
    width: 20.3em;
    }
}
@keyframes blinkCursor{
    from{
        border-right-color: #fff
    }
    to{
        border-right-color: transparent;
    }
}
`
export const Sub = styled.img`
transform: rotate(-65deg);
`
export const Less = styled.img`
transform: rotate(-180deg);
`
export const FirstImage = styled.img`
max-height: 80vh ;
border-radius: 50px;
max-width: 35vw;
border: 2px solid #fff;
`
export const SeccImage = styled.img`
max-height: 60vh ;
border-radius: 30px;
max-width: 55vw;
border: 2px solid #fff;
`
export const ThirdImage = styled.img`
min-height: 75vh;
width: 24vw;
border: 1px dashed #fff;
border-radius: 30px;
margin-bottom: 50px;
`
export const Title = styled.p`
display: flex;
justify-content: center;
align-items: center;
font-size: 125px;
margin-bottom: 25px;
background: linear-gradient(#444, #131212);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
`
export const AboutMe = styled.main`
padding: 0 200px;
height: 110vh;
color: #fff;
display: grid;
text-align: center;
display: flex;
gap: 10em;
justify-content: center;

div{
    display: flex;
    width: 30vw;
    gap: 40px;
    flex-direction: column;
}
ul{
    display: flex;
    gap: 10px;
}
li{
    list-style: none;
    background-color: #fff; 
    color: black;
    border-radius: 6px;
    text-align: center;
    padding: 2px;

    &:hover{ 
        transform: translateY(-5px);
        animation: ease-in-out 2000ms;

    }
}
img{
    height: 80px;
    padding: 7px;
}
`
export const Resume = styled.p`
    font-size: 22px;
    width: 30vw;
    text-align: start;

`
export const Skills = styled.div`
strong{
    font-size: 32px;
}
ul{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
}


`
export const Project = styled.section`
min-height: 80vh;
display: flex;
flex-direction: column;
color: #fff;

        a{
        text-decoration: none;
        color: #fff;
        position: relative;

        &::after {
        content: "";
        position: absolute;
        width: 40%;
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

span{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    padding: 15px;
    gap: 10px;
    border: 2px solid #9758a6;
    border-radius: 5px;
    height: 13em;
    }


.wrapper{
width: 100vw;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 300px;
gap: 20px;
}
`
export const Contacts = styled.footer`
height: 25vh;
/* background: linear-gradient(#444, #131212); */
display: flex;
align-items: center;
justify-content: center;
span{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5em;

    a{
        text-decoration: none;
        
    }
}
div{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2em;
    width: 30vw;
    padding: 2em;
    background: #fff;
    border-radius: 20px;
    animation:${props => props.end && 'moveRight 500ms forwards, moveLeft 500ms backwards'};
    @keyframes moveRight{
        div{transform: translateX(5px);}
    }
    img{
        height: 3em;
        color: #fff;
        cursor: pointer;
        &:hover{
            transform: translateY(-3px);
        }
    }
}
`
