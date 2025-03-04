import { useState } from "react"
import styled from "styled-components"

const NumberSeletctor = ({error,setError,selectNumber,setselectNumber}) => {

    const ArrayNumber = [1, 2, 3, 4, 5, 6]

    const NumberSelectorHandler =(value)=>{
        setselectNumber(value);
        setError("");
    }
    console.log(selectNumber)
    return (
        <NumberselectorContainer>
        <p className="error">{error}</p>
            <div className="flex">
                {ArrayNumber.map((value, index) => (
                    <Box
                        onClick={()=>NumberSelectorHandler(value)}
                        key={index}
                        isSelector={value === selectNumber}
                    >{value}</Box>))}
            </div>
            <p>Select Number</p>
        </NumberselectorContainer>

    )
}

export default NumberSeletctor

const NumberselectorContainer = styled.div`
height: 200px;


    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 600;
        display: flex;
        justify-content: end;
    }
.error{
    color: red;
    font-weight: 500;
}

`


const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 65px;
height: 65px ;
border: 1px solid black;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => (props.isSelector ? " black" : "white")};
color: ${(props) => (!props.isSelector ? " black" : "white")};


`