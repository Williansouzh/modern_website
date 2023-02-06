import styled from 'styled-components';

export const BlogContainer = styled.div`
    overflow: hidden;
    position: relative;
    background-color: #040C18;
    z-index: 1;
    h1{
        
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 800;
        font-size: 3em;
        line-height: 75px;
        /* or 121% */

        letter-spacing: -0.04em;

        background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    h2{
        font-size: 1.8em;
        background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%), #FFFFFF;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    p{
        font-weight: 400;
        font-size: 1.1em;
        line-height: 27px;

        color: #81AFDD;
    }
    //sections

    .section {
        margin: 0 auto;
        max-width: 85vw;
    }
    .section p{
        font-size: 1em;
    }
    .section--1{
        display: flex;
        flex-wrap: wrap;
    }
    .leftSide{
        width: 100%;
        max-width: 50%;
    }
    .leftSide form {
        display: flex;
        height: 3em;
    }
    .leftSide input[type="email"]{
        outline: none;
        flex-grow: 1;
        height: inherit;
        border: none;
        background: #052D56;
        border-radius: 5px 0px 0px 5px;
        padding-left: 1.5em;
        color: #81AFDD;
    }
    .leftSide input[type="email"]::placeholder{
        padding-left: 1.5em;
        color: #81AFDD;
    }
    .people{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 0em;
    }
    .people p{
        color: white;
        font-size: .8em;
    }
    .people img{
        height: 2.3em;
    }
    .rightSide{
        width: 100%;
        max-width: 50%;
    }
    .rightSide img{
        width: 100%;
        position: relative;
        top: -50px;
    }
    .logos{
        padding: 2em 2em 5em 2em;
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
    .logos img{
        max-width: 80%;
    }
    //section 2
    .section--2{
        margin: 2em auto;
    }
    .section--2--container{
        margin-bottom: 4em;
        width: 100%;
        padding: 2em;
        background-color: #052D56;
    }
    .section--2-largeTitle{
        padding: 2em 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .section--2-largeTitle p {
        color: #FF8A71;;
    }
    .section--2--topics{
        display: flex;
        justify-content: space-between;
    }
    //section 3
    .section--3--top{
        display: flex;
    }
    .section--3{
        display: flex;
        flex-direction: column;
    }
    .section--3--leftSide{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .section--3--leftSide h2{
        margin-bottom: 1em;
    }
    .section--3--leftSide p{
        color: #F49867;
    }
    .section--3--leftSide img{
        width: 100%;
    }
    .section--3--rightSide-bottom{
        padding-top: 10em;
        margin-left: 1em;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .section--3--rightSide-bottom p{
        margin: 1em 0em;
    }
    .section--3--rightSide p{
    }
    .section--3--bottom{
        display: flex;
        padding: 2em;
    }
    .blue{
        color: #71E5FF;
    }
    .rose{
         color:#F49867;

    }
    .section--3--pinkContainer{
        background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
        border: 1px solid #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10.7236px;
        padding: 2em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .section--3--pinkContainer p {
        margin-bottom: 1em;
        color: #0E0E0E;
    }
    .section--3--pinkContainer button {
        height: 3em;
        font-size: 1em;
        padding: 0em 3em;
        color: white;
        background: #000000;
        cursor: pointer;
        border-radius: 2em;
    }
    .section--3--pinkContainer button:hover {
        background-color: #F49867;
        transition-duration: .3s;
        color: #000000;
    }
    .section__4{
        margin: 4em auto;
    }
    .section__4--dashboard{
        margin: 4em 0em;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
            "primary second third"
            "primary fourth fifith"
        ;
        gap: 1.5em;
    }
    .title{
        color: white;
    }
    .primary{
        grid-area: primary;
        overflow: hidden;
    }
    .primary div{
        height: 100%;
    } 
    .second{
        grid-area: second;
    }
    .third{
        grid-area: third;
    }.fourth{
        grid-area: fourth;
    }
    .fifith{
        grid-area: fifith;
    }
    //section 5
    .section__5{
        margin: 8em auto;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .section__5 h1{
        text-align: center;
    }
    .section__5 button{
        margin: 2em;
        padding: 1em 2em;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        cursor: pointer;
    }
       .section__5 button:hover{
        background-color: white;
        color: #000000;
    }

    @media only screen and (max-width: 1095px) {
        .section--1{
            flex-direction: column;
        }
        .leftSide{
            max-width: 100%;
        }
        .rightSide{
            max-width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .rightSide img{
            width: 70%;
        }
        .section--3--rightSide-bottom{
            padding-top: 0em;
        }
    }
    @media only screen and (max-width: 770px){
        .section--3--top{
            flex-direction: column;
        }
        .section--3--leftSide{
        }
    }
    @media only screen and (max-width: 670px){
        .section--2--topics{
            display: flex;
            flex-direction: column;
        }
        .section--3--bottom{
            flex-direction: column;
        }
        .section__4--dashboard{
            display: flex;
            flex-direction: column;
        }
    }
`