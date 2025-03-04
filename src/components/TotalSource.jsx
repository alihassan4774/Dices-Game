import styled from "styled-components"

const TotalSource = ({score}) => {
  return (
    <ScoreTotal>
      <div>{score}</div>
      <p>Total Source</p>
    </ScoreTotal>
  )
}

export default TotalSource


const ScoreTotal = styled.div`
text-align: center;
width: 200px;
 margin-top: 30px;
 div{
  font-weight: 500;
       font-size: 94px;
       line-height: 70px;
       
 }
   p{
    font-size: 23px;
    font-weight: 500;
   }
`