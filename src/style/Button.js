import styled from "styled-components";

 export const Button = styled.button`
width: 220px;
height: 42px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
color: white;
background-color: black;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background  ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.3s background  ease-in;
}

    
`
 export const OutlineButton = styled(Button)`
 background-color: white;
 width: 178px;
 color: black;
 border: 1px solid black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid black;
    cursor: pointer;
   
}

    
`