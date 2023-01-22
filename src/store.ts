import { configureStore } from "@reduxjs/toolkit";

import gameSlice from "./pages/Game/slices/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>