import styled from 'styled-components'

export const Header = styled.header`
    nav{
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding: 2em;
        margin: 0 auto;
        z-index: 99;
    }
    @media only screen and (max-width: 770px){
        .nav{
            width: 100%;
        }
    }
`