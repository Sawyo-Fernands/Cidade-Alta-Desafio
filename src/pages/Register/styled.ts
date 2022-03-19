import styled from "styled-components";

export const ContainerMain=styled.main`

        height: calc(100vh - 6rem);

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3f3f4227;

    `

export const Main=styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #121214;
`


export const Container = styled.div`
  width: 450px;
  height: 70%;
  background-color: #202024;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 415px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 80%;
  height: 75%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
      color: white;
      margin-right: auto;
      margin-bottom: 0.5rem;
  }

  form{
      width: 100%;
  }
`;

export const InputContent = styled.div`
  background-color: #121214;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #121214;
  padding: 0 5px;
  margin-bottom: 10px;
  svg {
    color: #353434;
    margin: 0 10px;
    width: 20px;
    height: 20px;
  }
  &:focus-within {
    border-color: white;
    svg {
      color: white;
    }
  }
`;

export const Input = styled.input`
  outline: none;
  background-color: #121214;
  color: white;
  border: none;
  height: 50px;
  width: 100%;
  font-size: 15px;
`;


export const ButtonSubmit = styled.button`
  width: 100%;
  cursor: pointer;
  background: white;
  border-radius: 5px;
  border: none;
  color: black;
  font-weight: bold;
  height: 50px;
  opacity: 0.9;
  margin: 20px 0;
  
`;