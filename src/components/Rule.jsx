import styled from 'styled-components'

const Rule = () => {
    return (
        <RuleContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>
                    After clicking on the dice, if the selected number is equal to the dice number, 
                    you will get the same points as the dice.
                </p>
                <p>If you guess wrong, 2 points will be deducted.</p>
            </div>
        </RuleContainer>
    )
}

export default Rule

const RuleContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #FBF1F1;
    padding: 20px;

    h2 {
        font-size: 24px;
        font-weight: 600;
      
    }

    .text {
        margin-top: 24px;
        p {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
            
        }
    }

    /* Tablet */
    @media (max-width: 768px) {
        padding: 16px;
        h2 {
            font-size: 20px;
        }
        .text p {
            padding: 4px;
            font-size: 15px;
        }
    }

    /* Mobile */
    @media (max-width: 480px) {
        margin-top: 20px;
        padding: 12px;
        h2 {
            font-size: 18px;
        }
        .text p {
             padding: 2px;
            font-size: 13px;
        }
    }
`
