import { MovieGenresSliceType } from "@/types/movieGenres";
import { createSlice } from "@reduxjs/toolkit";
const initialState: MovieGenresSliceType = {
  items: [],
  isError: null,
  isLoading: false,
};
const movieGenres = createSlice({
  name: "movieGenres",
  initialState,
  reducers: {
    setMovieGenres: (state, { payload }) => {
      state.items = payload;
    },
  },
});
export const { setMovieGenres } = movieGenres.actions;
export default movieGenres.reducer;
