import styled from "styled-components";


export const Container= styled.main`

    height: 100vh ;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3f3f4227;

    @media(max-width:950px){
     height: 100%;
     padding-bottom: 2rem;
 }
   

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