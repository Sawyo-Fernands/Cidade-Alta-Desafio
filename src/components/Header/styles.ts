import styled from  'styled-components'


export const HeaderComponent=styled.header`

    width: 100%;
    height: 6rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1120px;
        margin: 0 auto;
        height: 6rem;

        img{
            max-height: 90%;
            cursor: pointer;
        }
        button{
            padding: 0.8rem 1.2rem;
            border: 0;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 600;
            background-color: #eba417;
            transition: filter 0.2s;

            a{
                text-decoration: none;
                color: white;
            }

            &:hover{
                filter: brightness(0.8);
            }
        }
    }

    @media (max-width:1200px) {
            div{
                width: 90%;
                margin: auto;
            }
        }

      

`