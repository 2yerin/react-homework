export const PLAYER = {
  A:'👩‍🚀',
  B:'👾',
};

export const GAME_BOARD = Array(9).fill(null);

export const WINNERS_COLOR = 'silver';

const WINNER_CONDITIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2],
];

export const checkeWinner = (gameBoard) => {
  let winnerInfo = null;

  for (const [x, y, z] of WINNER_CONDITIONS) {
    const winner = gameBoard[x];

    if (winner && winner === gameBoard[y] && winner === gameBoard[z]) {
      console.log('GAME OVER');
      winnerInfo = {
        winner,
        condition: [x, y, z],
      };

      break;
    }
  }

  return winnerInfo;
};