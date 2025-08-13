import styled from "styled-components";
import { Button } from "../style/Button";

const Container = styled.div`
  max-width: 1182px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 40px;
  padding: 20px;

  .content {
    text-align: center;

    h1 {
      font-size: 87px;
      white-space: nowrap;
    }
  }

  .image {
    img {
      width: 570px;
      height: 440px;
      max-width: 100%;
      height: auto;
    }
  }

  /* Tablet */
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;

    .content h1 {
      font-size: 60px;
      white-space: normal;
    }

    .image img {
      width: 400px;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .content h1 {
      font-size: 40px;
    }

    .image img {
      width: 280px;
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
