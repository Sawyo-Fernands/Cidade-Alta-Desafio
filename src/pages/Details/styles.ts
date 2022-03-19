import styled from "styled-components";


export const Container=styled.main`

height: calc(100vh - 6rem);

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3f3f4227;

    div{
        background-color: white;
        padding: 1.5rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width: 500px;

        @media (max-width:550px){
            width: 90%;
            margin: auto;
        }
        p{
            text-align: justify;
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;
        }
    }

`