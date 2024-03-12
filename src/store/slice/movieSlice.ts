import { MovieSliceType, PaginationType } from "@/types/movie";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MovieSliceType = {
  items: [],
  page: 1,
  totalPages: 5,
  isLoading: false,
  isError: null,
};
export const paginationPage = createAsyncThunk(
  "/movie/pagination",
  async (option: PaginationType, thunkApi) => {
    const { page, pageSize, onSuccess, onError } = option;
    try {
      const PaginationMovie = `${config.adminApiUrl}/movie?page=${page}&pageSize=${pageSize}`;
      const response = await fetch(PaginationMovie);
      const paginatedMovies = await response.json();
      console.log(paginatedMovies.movies);
      const { movies, totalMovies } = paginatedMovies;
      console.log(movies, "from movieslice");
      thunkApi.dispatch(setMovies(movies));
      thunkApi.dispatch(setTotalPages(Math.ceil(totalMovies / pageSize)));
      thunkApi.dispatch(setPage(page));
      onSuccess && onSuccess();
    } catch (error) {
      console.log(error);
      onError && onError();
    }
  }
);
const movieSlice = createSlice({
  name: "movieSLice",
  initialState,
  reducers: {
    setMovies: (state, { payload }) => {
      state.items = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setTotalPages: (state, { payload }) => {
      state.totalPages = payload;
    },
  },
});

export const { setMovies, setTotalPages, setPage } = movieSlice.actions;
export default movieSlice.reducer;
