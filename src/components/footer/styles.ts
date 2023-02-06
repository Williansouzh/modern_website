import styled from 'styled-components';

export const Footer = styled.footer`
    padding:  2em ;
    background-color: #031B34;
    color: white;
    display: flex;
    flex-direction: column;
;
    .footer__container{
        display: flex;
        justify-content: space-between;
    }
    .footer__leftSide{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
    }
    .footer__leftSide p{
        color: white;
    }
    .footer__rightSide{
        flex-grow: 2;
        display: flex;
        justify-content: space-around;
    }
    .footer__container ul{
        list-style: none;
    }
    .footer__container ul p{
        color: white;
    }
    .footer__rightSide ul li a{ 
        text-decoration: none;
        color: white;
    }
    .footer__rightSide ul li a:hover{ 
        color: #FF8A71;

    }
    .footer__rightSide ul li{ 
        margin: 1em 0em;
    }
    
    .footer__leftSide--h2{
        margin-bottom: .5em;
        color: white;
        font-size: 2em;
    }
    .credits{
        margin-top: 2em;
        text-align: center  ;
    }
    @media only screen and (max-width: 575px){
        .footer__rightSide{
            margin-top: 2em;
        }
        .footer__container{
            flex-direction: column;
        }
    }
`