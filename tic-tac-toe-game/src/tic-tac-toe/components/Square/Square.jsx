import S from './Square.module.css';

function Square(){
  return (
    <>
    <button className={S.Square} disabled>🟨</button>
    <button className={S.Square} disabled>⚫️</button>
    <button className={S.Square}></button>
    </>
  );
}

export default Square;