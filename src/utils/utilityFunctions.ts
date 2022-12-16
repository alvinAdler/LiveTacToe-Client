import { PlayerPiece } from "../pages/Game/Gameboard"

export const winPossibilities = [
  /*
  The board is a 3x3 board. Possible combinatoins for a player to win are:
  0 1 2 - 3 4 5 - 6 7 8  => Horizontal
  0 3 6 - 1 4 7 - 2 5 8  => Vertical
  0 4 8 - 2 4 6          => Diagonal
  */
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

export const winnerChecker = (board: PlayerPiece[]) => {
  for(let winPos of winPossibilities){
    const firstPiece = board[winPos[0]]
    if(firstPiece !== "" && [board[winPos[0]], board[winPos[1]], board[winPos[2]]].every((item) => item === firstPiece)){
      return firstPiece
    }
  }

  return undefined
}