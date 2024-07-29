import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styled from "styled-components";

export const ArroWDown = styled(ArrowDownwardIcon)`
cursor: pointer;
transform: ${props => props.active ? "rotate(180deg)" : ""};

`

export const BoxHeader = styled.header`
display: flex;
flex-direction: column;
width: 100dvw;
position: fixed;

.handler {
    display: none;
    background-color: #181616;
    padding: 10px ;
    
}
.opener{
    background: none;
    width: 100%;
    border: none;
}

.disabled{
    display: none;
}

@media(max-width: 790px){
    .handler{
        display: ${props => props.visible ? "flex" : "none"};
        flex-direction: column;
        align-items: center;

        .outClick{
            position: absolute;
            top:0;
            width: 100dvw;
            height: ${props => props.active ? "100dvh" : "0px"};
            opacity: 0;
            z-index: 10;
}
    }
}
`

export const Container = styled.nav`

display: flex;
justify-content: space-between;
width: 100%;

z-index: 12;
background-color: #131212;
color: #fff;
overflow: hidden;
padding: 1rem 3rem ;
/* opacity: .9; */
.header{
    display: flex;
    gap: 20px;
    border-radius: 7px;
    span{
        display: flex;
        align-items: center;
    }
    
    p{
    margin: 0 10px;
    cursor: pointer;
    color: #fff;
    font-weight: 1000;
}

}

@media (max-width: 760px){
    display: flex ;
    padding: 1rem ;


    p {
        font-size: 1.5rem;
        text-align: center;
        position: relative;
    }
    .ctn{
        display: none; 
    }

}
`
export const Media = styled.div`
display: none;

`

export const Contacts = styled.footer`
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
    gap: 30px;
    border-radius: 20px;
span{

    a{
        color: #fff;        
        cursor: pointer;
        img{
            height: 30px;
            svg{
                color: #fff;        

            }

        }
    }
    @media (max-width: 760px){
        a{    
            img{
                height: 20px;
            }
        }


        }



    }
}
`

export const ButtonsContainer = styled.div`
display:flex;
gap: 50px;
align-items: center;
justify-content: end; 
transition-duration: 200ms;
@media (max-width: 760px){
        z-index: 20000;
        visibility: ${props => props.active ? "visible" : "hidden"};
        height: ${props => props.active ? "max-content" : "0px"};
        margin: ${props => props.active ? "20px auto" : "0px"};


        flex-direction: column;
        gap: 20px;
        font-size: 1.4rem;
    }
`