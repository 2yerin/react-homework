import S from './Square.module.css';

function Square({children, gamePlay}){

  return (
    <button className={S.Square} onClick={gamePlay} disabled={!!children}>{children}</button>
  );
}

export default Square;