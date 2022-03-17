import styled from 'styled-components'

export const Container=styled.main`

    background-color: #121214;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        background-color: #f6f6f6;
        width: 600px;
        margin: 0 auto;
        padding: 1.5rem 2rem;
        border-radius: 0.5rem;

        form{
            width: 90%;
            margin: auto;
            display: flex;
            align-items: center;
            flex-direction: column;

            img{
                border-radius: 40%;
                width: 150px;
                height: 150px;
                cursor: pointer;

                transition: filter 0.2s;

                &:hover{
                    filter: brightness(0.8);
                }
            }

            div{
                width: 100%;

                label{
                margin-right: auto;
            }
            }

            

            input{
                height: 3rem;
                width: 100%;
                padding: 0.5rem;
                border-radius: 0%.25rem;
                border: 1px solid #a8a8b3;
                margin-top: 1rem;
            }
            
            button{
                width: 40%;
                margin: auto;
                margin-bottom: 1rem;
                padding: 1rem 1.5rem;
                border: 0;
                border-radius: 0.25rem;
                background-color:#eba417 ;
                color:white;
                font-size: 1.1rem;
                transition: filter 0.2s;

                &:hover{
                    filter: brightness(0.8);
                }
                
            }
        }
    }


`
