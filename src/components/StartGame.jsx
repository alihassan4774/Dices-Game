import styled from "styled-components";
import { Button } from "../style/Button";

const Container = styled.div`
  max-width: 1182px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .content {
    h1 {
      font-size: 87px;
      white-space: nowrap;
    }
  }
  .image {
    img {
      width: 570px;
      height: 440px;
    }
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image">
        <img src="/images/dices.png" alt="dice-photo" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
