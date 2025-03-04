import { useState } from "react"
import styled from "styled-components"

const RoleDice = ({currentDice,roledice}) => {


    return (
        <DiceContainer>
            <div onClick={roledice} className="dice">
                <img src={`/images/dice_${currentDice}.png`} />
                <p>Click on Dice to roll</p>
            </div>
        </DiceContainer>
    )
}

export default RoleDice

const DiceContainer = styled.div`
margin-top:-45px;
display: flex;
justify-content: center;
align-items: center;

.dice{
    cursor: pointer;
}



img{
    width: 190px ;
    height: 190px;
}
p{
    font-size: 14px;
    text-align: center;
    font-weight: 550;
}
    
`