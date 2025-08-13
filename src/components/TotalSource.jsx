import styled from "styled-components"

const TotalSource = ({ score }) => {
  return (
    <ScoreTotal>
      <div>{score}</div>
      <p>Total Score</p>
    </ScoreTotal>
  )
}

export default TotalSource

const ScoreTotal = styled.div`
  text-align: center;
  width: 200px;
  margin-top: 30px;

  div {
    font-weight: 500;
    font-size: 94px;
    line-height: 70px;
  }

  p {
    font-size: 23px;
    font-weight: 500;
  }

  /* Tablet */
  @media (max-width: 768px) {
    width: 160px;

    div {
      font-size: 70px;
      line-height: 60px;
    }

    p {
      font-size: 20px;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 120px;

    div {
      font-size: 50px;
      line-height: 50px;
    }

    p {
      font-size: 16px;
    }
  }
`
