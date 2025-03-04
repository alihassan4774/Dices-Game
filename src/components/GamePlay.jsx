import { useState } from "react";
import NumberSeletctor from "./NumberSeletctor";
import RoleDice from "./RoleDice";
import TotalSource from "./TotalSource";
import styled from "styled-components";
import { Button, OutlineButton } from "../style/Button";
import Rule from "./Rule";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setselectNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showrule, setShowrule] = useState(false);
  console.log(currentDice)

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roledice = () => {
    if (!selectNumber) {
      setError("You have not Selected   any Number");
      return;
    }
    setError("");
    const randomNumber = getRandomNumber(1, 7);
    setcurrentDice((prev) => randomNumber);

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setselectNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalSource score={score} />
        <NumberSeletctor
          error={error}
          setError={setError}
          selectNumber={selectNumber}
          setselectNumber={setselectNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roledice={roledice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button
          onClick={() => setShowrule((prev) => !prev)}
          className="show-btn"
        >
          {showrule ? "Hide" : "show"} Rules
        </Button>
      </div>
      {showrule && <Rule />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 90px;
  }
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 35px;
  }
  .show-btn {
    width: 178px;
  }
`;
