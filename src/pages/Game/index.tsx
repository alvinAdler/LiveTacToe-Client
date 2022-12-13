import { FC, useState } from "react"
import { CircularProgress } from "@mui/material"

import WinIcon  from '../../assets/win-icon.svg'
import LoseIcon  from '../../assets/lose-icon.svg'

import { PlayerPiece } from "./Gameboard"
import GameBoard from "./Gameboard"
import Modal from "../../components/Modal"
import Button, { ButtonInvert } from "../../components/atoms/Button"

const SAMPLE_BOARD_DATA: PlayerPiece[] = [
  "X", "O", "O", 
  "X", "X", "O", 
  "X", "O", "O"
]

const Game = () => {

  const [showModal, setShowModal] = useState(true)

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

const WaitingModalContent = () => {
  return(
    <div className="flex flex-col gap-8 items-center justify-around w-full">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-sub font-bold text-2xl text-center">Waiting for an opponent</h2>
        <p className="text-sub text-center">Please wait for a moment</p>
      </div>
      <CircularProgress/>
      <Button>Cancel match</Button>
    </div>
  )
}

interface EndgameModalContentProps{
  isWin: boolean
}

const EndgameModalContent: FC<EndgameModalContentProps> = ({ isWin }) => {
  return(
    <div className="flex flex-col gap-4 items-center items-center w-full">
      {isWin ? 
        <>
          <h2 className="text-sub font-bold text-2xl text-center">Congratulations!</h2>
          <img src={WinIcon} alt="Winner" className="w-[15rem] aspect-square"/>
        </>
      :
        <>
          <h2 className="text-sub font-bold text-2xl text-center">Better luch next time!</h2>
          <img src={LoseIcon} alt="Loser" className="w-[15rem] aspect-square"/>
        </>
      }
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        <Button>Exit</Button>
        <ButtonInvert>Rematch</ButtonInvert>
      </div>
    </div>
  )
}

export default Game