import { genreSliceType } from "@/types/genre";
import { createSlice } from "@reduxjs/toolkit";

const initialState: genreSliceType = {
  items: [],
  isLoading: false,
  isError: null,
};
const genreSlice = createSlice({
  name: "genreSlice",
  initialState,
  reducers: {
    setGenres: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setGenres } = genreSlice.actions;
export default genreSlice.reducer;
