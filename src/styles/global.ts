import {createGlobalStyle } from 'styled-components'

export const GlobalStyle =createGlobalStyle`
   
    body,button,textarea,input{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h2,h1,h3,h4,h5,h5,strong{
        font-weight: 600;
    }
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    body{
        background-color: var(--background);
        -webkit-font-smoothing:antialiased;
    }
    html{
        @media (max-width:1080px){
            font-size: 93.75%;
        }
        @media (max-width:7200px){
            font-size: 87.5%;
        }
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    
`