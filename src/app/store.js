import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/playerSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    favorites: favoritesReducer,
  },
});
