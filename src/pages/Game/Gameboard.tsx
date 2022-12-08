import { FC } from 'react'
import { FaTimes, FaRegCircle } from 'react-icons/fa'

export interface GameboardProps{
  boardData: PlayerPiece[]
}

export type PlayerPiece = "X" | "O" | ""

const GameBoard: FC<GameboardProps> = ({ boardData }) => {
  return (
    <div className='m-auto w-[50%] min-w-[15rem] max-w-[30rem] grid grid-cols-3 grid-rows-3'>
      {boardData.map((item: PlayerPiece, index: number) => (
        <span key={index} className="border-solid border-2 border-secondary aspect-square grid place-items-center">
          {item === "O" ? <Round/> : <Cross/>}
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