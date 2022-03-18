import styled from "styled-components";


export const Container= styled.main`

    height: calc(100vh - 6rem);

    display: flex;
    align-items: center;
    justify-content: center;

    section{
        width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        gap: 1rem;
        

        @media (max-width:1200px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width:600px) {
            grid-template-columns: 1fr;
            margin-top: 2rem;
        }

     
    }

`