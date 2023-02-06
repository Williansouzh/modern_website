import styled from 'styled-components'
type buttonProps = {
    primary?: boolean
}


export const Button = styled.button<buttonProps>`
    background-color: ${props=>props.primary? "#FF4820":"transparent"};
    color: white;
    padding: 1em 2em;
    border-radius: .3em;
    border: none;
    cursor: pointer;
    &:hover{
        transition-duration: .2s;
        background: ${props=>props.primary? "#040C18": "transparent"};
        color: #FF4820;
    }
`;