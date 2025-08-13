import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ currentDice, roledice }) => {
  return (
    <DiceContainer>
      <div onClick={roledice} className="dice">
        <img src={`/images/dice_${currentDice}.png`} alt="dice" />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: -45px;
  display: flex;
  justify-content: center;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  img {
    width: 190px;
    height: 190px;
    transition: all 0.3s ease;
  }

  p {
    font-size: 14px;
    text-align: center;
    font-weight: 550;
  }

  /* Tablet */
  @media (max-width: 768px) {
    margin-top: 20px;
    img {
      width: 140px;
      height: 140px;
    }
    p {
      font-size: 13px;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 20px;
   
  }
  @media (max-width: 1900px) {
    margin-top: 20px;
   
  }

  /* Mobile */
  @media (max-width: 480px) {
    margin-top: 20px;
    img {
      width: 130px;
      height: 130px;
    }
    p {
      font-size: 12px;
    }
  }
`;
