import { FC, useState, useEffect, useContext } from "react"
import { CircularProgress } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom"

import WinIcon  from '../../assets/win-icon.svg'
import LoseIcon  from '../../assets/lose-icon.svg'

import { RootState } from "../../store"
import { winnerChecker } from "../../utils/utilityFunctions"
import { placeBoardPiece, setDisableClick } from "./slices/gameSlice"
import { listOfServerEvents } from "../../utils/socketContext"
import SocketContext from "../../utils/socketContext"

import { PlayerPiece } from "./Gameboard"
import GameBoard from "./Gameboard"
import Modal from "../../components/Modal"
import Button, { ButtonInvert } from "../../components/atoms/Button"

export interface GameNavigationStateInterface{
  condition: "create" | "join"
}

const Game = () => {

  const socket = useContext(SocketContext)

  const {board: gameBoard, currentRoomId} = useSelector((state: RootState) => state.game)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { condition } = location.state as GameNavigationStateInterface

  const [isWaitingModalVisible, setIsWaitingModalVisible] = useState(condition === "create")

  useEffect(() => {

    socket?.on("roomStatus", ({ message, isSomeoneJoin }) => {
      console.log(message)
      if(isSomeoneJoin){
        setIsWaitingModalVisible(false)
      }
    })

    return () => {
      socket?.off("roomStatus")
    }
  }, [])

  useEffect(() => {
    const checkResult = winnerChecker(gameBoard)

    if(checkResult === undefined) return

    dispatch(setDisableClick(true))
    console.log(`The winner is ${checkResult}`)

  }, [gameBoard])

  const handleCellClick = (targetedIndex: number, piece: PlayerPiece) => {
    dispatch(placeBoardPiece({piece: piece, index: targetedIndex}))
  }

  return (
    <div className="w-full h-full flex flex-col py-8">
      <header className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-sub">Game Board</h1>
        <p className="text-sub text-center">Your room ID: <span className="font-mono font-bold">{currentRoomId}</span></p>
      </header>
      <div className="w-full mt-12">
        <GameBoard boardData={gameBoard} onCellClick={handleCellClick}/>
      </div>
      <Modal isVisible={!currentRoomId} onClose={() => navigate("/")}>
        <Modal.Default 
          icon="ERROR" 
          title="Error!" 
          desc="Please create or join a game in a proper way"
          onConfirm={() => navigate("/")}
        />
      </Modal>
      <Modal isVisible={isWaitingModalVisible} closeable={false}>
        <WaitingModalContent/>
      </Modal>
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