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
  height: auto;

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  p {
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: end;
  }

  .error {
    color: red;
    font-weight: 500;
  }

  /* Tablet screens */
  @media (max-width: 1024px) {
    .flex {
      justify-content: center;
    }
    p {
      justify-content: center;
    }
  }

  /* Mobile screens */
  @media (max-width: 768px) {
    .flex {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      justify-items: center;
    }
    p {
      font-size: 20px;
      justify-content: center;
    }
  }

  /* Extra-small devices */
  @media (max-width: 480px) {
    .flex {
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelector ? "black" : "white")};
  color: ${(props) => (!props.isSelector ? "black" : "white")};
  cursor: pointer;
  transition: 0.2s;

  /* Tablet */
  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 20px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }
`;
