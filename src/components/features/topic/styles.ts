import styled from 'styled-components'
type propsType = {
    row: boolean
}
export const Container = styled.div<propsType>`
    padding: 1em;
    width: ${props=>props.row? "100%": "50%"};
    color: white;
    display: flex;
    flex-direction:  ${props=>props.row? "row" : "column"};
    h3{
        font-size: 1.2em;
        margin: .5em 0em 1em 0em;
    }
    .icon{
        content: "";
        width: 38px;
        height: 3px;
        background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%), #FFFFFF;
    }
    .topic--header{
        width: 100%;
        flex-grow: 1;
    }
    .topic--text{
        position: relative;
        top: 20px;
        flex-grow: 2;
    }
    @media only screen and (max-width: 670px){
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`