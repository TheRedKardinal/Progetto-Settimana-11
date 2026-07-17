import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteSongs: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const song = action.payload;
      const exists = state.favoriteSongs.some((s) => s.id === song.id);
      if (exists) {
        state.favoriteSongs = state.favoriteSongs.filter(
          (s) => s.id !== song.id,
        );
      } else {
        state.favoriteSongs.push(song);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
