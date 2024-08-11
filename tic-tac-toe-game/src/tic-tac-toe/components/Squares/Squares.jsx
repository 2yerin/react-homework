import { useState } from "react";
import S from './Squares.module.css';
import Square from "../Square/Square";
import { PLAYER, GAME_BOARD, checkeWinner, WINNERS_COLOR} from "@/tic-tac-toe/constants";

function Squares(){
  const [gameBoard, setGameBoard] = useState(GAME_BOARD);

  const handleGameFlow = (selectedIndex) => () => {
    if (winnerInfo) {
      alert('GAME OVER');
      return;
    }

    setGameBoard((prevGameBoard)=>{
      const nextGameBoard = prevGameBoard.map((currentValue, index)=>{
        return index===selectedIndex ? currentPlayer : currentValue;
      });

      return nextGameBoard;
    });
  }

  const winnerInfo = checkeWinner(gameBoard);
  const currentStage = gameBoard.filter(Boolean).length;
  const currentPlayer = currentStage % 2 === 0 ? PLAYER.A : PLAYER.B

  return (
    <div className={S.Squares}>{
      gameBoard.map((currentValue, index)=>{
        const winnerStyles = {
          backgroundColor: null,
        };

        if (winnerInfo){
          const [x, y, z] = winnerInfo.condition;

          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }

        return (
          <Square key={index} style={winnerStyles} gamePlay={handleGameFlow(index)}>{currentValue}</Square>
        )})}
    </div>
  );
}

export default Squares;