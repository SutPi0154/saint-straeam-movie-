import { MovieSliceType } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MovieSliceType = {
  items: [],
  isLoading: false,
  isError: null,
};
const movieSlice = createSlice({
  name: "movieSLice",
  initialState,
  reducers: {
    setMovies: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
