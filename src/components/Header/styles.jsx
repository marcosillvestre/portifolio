import styled from "styled-components";


export const Container = styled.header`
display: flex;
justify-content: space-between;
z-index: 12;
width: 100vw;
background-color: #131212;
color: #fff;
overflow: hidden;
padding: 1rem 3rem ;
position: fixed;
opacity: .9;
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


`