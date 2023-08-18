import NumberSelector from "./NumberSelector"
import { useState } from "react"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import  styled  from "styled-components"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
  };

  const roleDiceHandler = () => {

    if(!selectedNumber) {
      setError("You Have not Selected any Number");
      return;
    }

    setError("")

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber) {
      setScore((prev) => prev+randomNumber)
    }else {
      setScore((prev) => prev - 2 )
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0)
  }



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} roleDiceHandler={roleDiceHandler} />
      <div className="btns">
        <OutlineButton onClick={resetScore} >Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)} >
          {
            showRules ? "Hide" : "show"
          }
           Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.div`

  padding-top: 70px;

    .top_section{
      display: flex;
      justify-content: space-around;
      align-items: end;
    }

    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* max-width: 220px; */
      align-items: center;
      gap: 10px;
    }
`; 