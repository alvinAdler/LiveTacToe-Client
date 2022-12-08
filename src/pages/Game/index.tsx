import GameBoard from "./Gameboard"

import { PlayerPiece } from "./Gameboard"

const SAMPLE_BOARD_DATA: PlayerPiece[] = [
  "X", "O", "O", 
  "X", "X", "O", 
  "X", "O", "O"
]

const Game = () => {
  return (
    <div className="w-full h-full flex flex-col py-8">
      <header className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-sub">Game Board</h1>
        <p className="text-sub text-center">Your room ID: 7123hjf</p>
      </header>
      <div className="w-full mt-12">
        <GameBoard boardData={SAMPLE_BOARD_DATA}/>
      </div>
    </div>
  )
}

export default Game