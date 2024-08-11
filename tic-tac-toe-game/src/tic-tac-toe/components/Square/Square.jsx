import S from './Square.module.css';
import {func, node} from 'prop-types';

Square.propTypes = {
  children: node,
  gamePlay: func,
};

function Square({children, gamePlay, style}){

  return (
    <button className={S.Square} onClick={gamePlay} disabled={!!children} style={style}>{children}</button>
  );
}

export default Square;