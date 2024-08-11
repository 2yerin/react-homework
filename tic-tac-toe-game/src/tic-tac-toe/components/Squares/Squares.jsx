import { useState } from "react";
import S from './Squares.module.css';
import Square from "../Square/Square";
import { PLAYER, GAME_BOARD} from "@/tic-tac-toe/constants";

function Squares(){
  const [gameBoard, setGameBoard] = useState(GAME_BOARD);

  const handleGameFlow = (selectedIndex) => () => {
    setGameBoard((prevGameBoard)=>{
      const nextGameBoard = prevGameBoard.map((currentValue, index)=>{
        return index===selectedIndex ? PLAYER.A : currentValue;
      });

      return nextGameBoard;
    });
    }


  return (
    <div className={S.Squares}>{
      gameBoard.map((currentValue, index)=>{
        return (
          <Square key = {index} gamePlay = {handleGameFlow(index)}>{currentValue}</Square>
        )})}
    </div>
  );
}

export default Squares;