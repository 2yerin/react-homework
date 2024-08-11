import Square from "../Square/Square";
import S from './Squares.module.css';

function Squares(){
  return (
    <div className={S.Squares}>
      <Square />
    </div>
  );
}

export default Squares;