import S from './Square.module.css';

function Square({children, gamePlay, style}){

  return (
    <button className={S.Square} onClick={gamePlay} disabled={!!children} style={style}>{children}</button>
  );
}

export default Square;