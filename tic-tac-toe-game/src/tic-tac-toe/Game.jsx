import Board from './components/Board/Board';
import History from './components/History/History';
import S from './Game.module.css';

function Game() {
  return (
    <div className={S.Game}>
      <Board/>
      <History/>
    </div>
  );
}

export default Game;
