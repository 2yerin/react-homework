import S from './Square.module.css';

function Square({children, gamePlay}){
  return (
    <button className={S.Square} onClick={gamePlay}>{children}</button>
  );
}

export default Square;