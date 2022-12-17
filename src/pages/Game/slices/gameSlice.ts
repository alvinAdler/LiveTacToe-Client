import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PlayerPiece } from '../Gameboard'

// const SAMPLE_BOARD_DATA: PlayerPiece[] = [
//   "O", "O", "X", 
//   "O", "O", "X", 
//   "X", "X", "O"
// ]

const SAMPLE_BOARD_DATA: PlayerPiece[] = [
  "", "", "", 
  "", "", "", 
  "", "", ""
]

interface InitialStateType{
  board: PlayerPiece[],
  playerPiece: PlayerPiece,
  disableClick: boolean
}

const INITIAL_STATE: InitialStateType = {
  board: SAMPLE_BOARD_DATA,
  playerPiece: "O",
  disableClick: false
}

const GameSlice = createSlice({
  name: "game",
  initialState: INITIAL_STATE,
  reducers: {
    placeBoardPiece: (state, action: PayloadAction<{piece: PlayerPiece, index: number}>) => {
      const { piece, index } = action.payload

      if(index < 0 || index > 8){
        throw Error("Index must be equal or greater than 0 and equal or less than 8")
      }

      if(["X", "O"].includes(state.board[index])) throw Error("Cell already occupied")

      state.board[index] = piece
    },
    setPlayerPiece: (state, action: PayloadAction<PlayerPiece>) => {
      if(action.payload === "") throw Error("Player Piece can not be an empty string")

      state.playerPiece = action.payload
    },
    setDisableClick: (state, action: PayloadAction<boolean | undefined>) => {
      if(action.payload !== undefined){
        state.disableClick = action.payload
        return
      }

      state.disableClick = !state.disableClick
    }
  }
})

export const { placeBoardPiece, setPlayerPiece, setDisableClick } = GameSlice.actions
export default GameSlice.reducer