import { styled } from "styled-components";

const RoleDice = ({currentDice, roleDiceHandler}) => {


    
  return (
    <DiceContainer>
        <div className="dice" onClick={roleDiceHandler} >
            <img src={`../../public/images/dice_${currentDice}.png`} alt="dice_1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
        margin-top: 15px;
    }
`;