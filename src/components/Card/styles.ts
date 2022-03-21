import styled from "styled-components";


export const CardContainer=styled.div`

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 2rem 1.5rem;
    background-color: whitesmoke;
    border-radius: 0.5rem;

    
`
interface RadioBoxProps{
    activeColor:string;
}

const colors={
    grey:'grey',
    red:'#e52e4ddc'
}

export const Button=styled.button<RadioBoxProps>`

    border: 0;
    padding: 0.8rem 1rem;
    font-weight: 600;
    border-radius: 0.25rem;
    background-color: ${props=>props.activeColor == 'grey' ? colors.grey :  colors.red};
    color: white;

`
interface IsActivebuttons{
    activeDisplay:string;
}
const display={
    none:'none',
    flex:'flex'
}

export const ContainerButtons=styled.div<IsActivebuttons>`
display:${props=> props.activeDisplay =="flex" ? display.flex : display.none};
gap: 1rem;
margin-top: 1rem;
align-items: center;
`

export const Title=styled.h1`
    margin-bottom: 1rem;
    color: black;
    text-align: center;
`

export const Subtitle=styled.h3`
    margin-bottom: 0.5rem;
        font-weight: 600;
        color:#121214; ;
`


export const Paragraph=styled.p`

        margin-bottom: 0.5rem;
        text-align: justify;
        font-size: 1rem;
`




