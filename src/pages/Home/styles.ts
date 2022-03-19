import styled from "styled-components";


export const Container= styled.main`

    height: calc(100vh - 6rem);

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3f3f4227;

   

`

export const SectionHome=styled.section`



        width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        gap: 1.5rem;
        

        @media (max-width:1300px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width:960px) {
            grid-template-columns: 1fr;
            margin-top: 2rem;
        }

     
    
`