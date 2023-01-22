import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import WaveFooter from '../../assets/footer-wave.svg'

import { setPlayerPiece, setRoomId, setPlayerName, setDisableClick } from '../Game/slices/gameSlice'

import MenuCard from "./MenuCard"
import SocketContext from '../../utils/socketContext'
import { PlayerPiece } from '../Game/Gameboard'

const Landing = () => {

  const socket = useContext(SocketContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleJoinRoom = (roomId: string) => {
    console.log(roomId)
    socket?.emit("joinRoom", roomId, ({message, room, success}) => {
      console.log(message)
      console.log(room)
      if(success){
        // Successfully joinned a room; direct the usre to the board game
        dispatch(setPlayerPiece(room.players.player2 as PlayerPiece))
        dispatch(setRoomId(room.id))
        dispatch(setPlayerName("player2"))
        if(room.currentTurn !== "player2"){
          dispatch(setDisableClick(true))
        }
        navigate("/game", {state: {
          condition: "join"
        }})
        return
      }
    })
  }
  
  const handleCreateRoom = (roomId: string) => {
    console.log(roomId)
    socket?.emit("createRoom", roomId, ({ message, room, success }) => {
      console.log(message)
      if(success){
        // Successfully created a room; direct user to the board page
        dispatch(setPlayerPiece(room.players.player1 as PlayerPiece))
        dispatch(setRoomId(room.id))
        dispatch(setPlayerName("player1"))
        if(room.currentTurn !== "player1"){
          dispatch(setDisableClick(true))
        }
        navigate("/game", {state: {
          condition: "create"
        }})
        return
      }
    })
  }

  return (
    <div className='w-full h-full flex justify-center items-center mb-[15rem]'>
				<div className='flex flex-col gap-16 p-12 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-solid border-2 border-secondary'>
          <h1 className='text-4xl font-bold text-center text-sub'>Live-Tac-Toe</h1>
          <div className="flex flex-col gap-4">
            <MenuCard title="Join a Room" placeholder='Room ID' submitText="Join" onSubmit={handleJoinRoom}/>
            <MenuCard title="Create a Room" placeholder='Room ID' submitText="Create" onSubmit={handleCreateRoom}/>
          </div>
        </div>
        <img className='w-screen absolute bottom-0 -z-1' src={WaveFooter} alt="Wave" />
    </div>
  )
}

export default Landing