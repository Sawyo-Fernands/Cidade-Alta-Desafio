import styled from 'styled-components'

export const Container=styled.main`

    background-color: #f2f2f2;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div:first-child{
        box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    }

    div{
        background-color: #ffffff;
        width: 400px;
        margin: 0 auto;
        padding: 1.5rem 1.5rem;
        border-radius: 0.5rem;
    


        form{
            width: 100%;
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

                .error-message{
                    color: red;
                    margin-top: 0.5rem;
                    font-weight: 900;
                }

                label{
                margin-right: auto;
            }

            input{
                height: 3rem;
                width: 100%;
                padding: 0.5rem;
                border-radius: 0.50rem;
                border: 1px solid #f7f7f7;
                background-color: #f2f2f2;
                margin-top: 1rem;
                outline: none;
                }  
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
