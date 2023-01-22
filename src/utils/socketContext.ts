import { createContext } from "react";
import { Socket } from "socket.io-client";
import GameBoard, { PlayerPiece } from "../pages/Game/Gameboard";

export interface Player{
  player1?: PlayerPiece,
  player2?: PlayerPiece
}

export interface Room{
  id: string,
  players: Player,
  board: PlayerPiece[],
  currentTurn: keyof Player
}

export const listOfServerEvents = ["roomStatus"]
export interface ServerToClientsEvents{
  roomStatus: ({message, isSomeoneJoin}: {message: string, isSomeoneJoin: boolean}) => void
}

export const listOfClientEvents = ["joinRoom", "createRoom"]
export interface ClientToServerEvents{
  joinRoom: (roomId: string, callback: ({message, room, success}: {message: string, room: Room, success: boolean}) => void) => void,
  createRoom: (roomId: string, callback: ({message, room, success}: {message: string, room: Room, success: boolean}) => void) => void
}

const SocketContext = createContext<Socket<ServerToClientsEvents, ClientToServerEvents> | null>(null)

export default SocketContext