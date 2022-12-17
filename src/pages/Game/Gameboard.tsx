import { FC } from 'react'
import { useSelector } from 'react-redux'

import { FaTimes, FaRegCircle } from 'react-icons/fa'

import { RootState } from '../../store'

export type PlayerPiece = "X" | "O" | ""
export interface GameboardProps{
  boardData: PlayerPiece[],
  onCellClick: (index: number, playerPiece: PlayerPiece) => void
}

const GameBoard: FC<GameboardProps> = ({ boardData, onCellClick }) => {

  const playerPiece = useSelector((state: RootState) => state.game.playerPiece)
  const isClickDisabled = useSelector((state: RootState) => state.game.disableClick)

  return (
    <div className='m-auto w-[50%] min-w-[15rem] max-w-[30rem] grid grid-cols-3 grid-rows-3'>
      {boardData.map((item: PlayerPiece, index: number) => (
        <span key={index} className="border-solid border-2 border-secondary aspect-square grid place-items-center cursor-pointer" onClick={() => {
          if(!isClickDisabled) onCellClick(index, playerPiece)
        }}>
          {item === "O" ? <Round/> : item === "X" && <Cross/>}
        </span>
      ))}
    </div>
  )
}

const Cross = () => {
  return(
    <FaTimes className='text-red text-6xl'/>
  )
}

const Round = () => {
  return(
    <FaRegCircle className='text-green text-6xl'/>
  )
}

export default GameBoard