import { AppSlice, GetAppDataOptions } from "@/types/app";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setGenres } from "./genreSlice";
import { setMovies } from "./movieSlice";
import { setMovieGenres } from "./movieGenresSlice";
const initialState: AppSlice = {
  init: false,
  isLoading: false,
  isError: null,
};
export const fetchAppData = createAsyncThunk(
  "app/appSlice",
  async (options: GetAppDataOptions, thunkApi) => {
    const { onSuccess, onError, role } = options;
    console.log("inside appslice");
    try {
      const appDataUrl = role
        ? `${config.adminApiUrl}/app?role=${role}`
        : `${config.costumerApiUrl}/app`;
      const response = await fetch(appDataUrl);
      const appData = await response.json();

      const { movies, genres, movieGenres } = appData;
      console.log(movieGenres, "movie genre");
      onSuccess && onSuccess();
      if (role === "admin") {
        thunkApi.dispatch(setInit(true));
        thunkApi.dispatch(setMovies(movies));
        thunkApi.dispatch(setGenres(genres));
        thunkApi.dispatch(setMovieGenres(movieGenres));
      } else if (role === "user") {
        thunkApi.dispatch(setInit(true));
        thunkApi.dispatch(setMovies(movies));
        thunkApi.dispatch(setMovieGenres(movieGenres));
      } else {
        thunkApi.dispatch(setInit(true));
        thunkApi.dispatch(setMovies(movies));
        thunkApi.dispatch(setMovieGenres(movieGenres));
      }
    } catch (err) {
      onError && onError();
      console.log(err);
    }
  }
);

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setInit: (state, { payload }) => {
      state.init = payload;
    },
  },
});
export const { setInit } = appSlice.actions;
export default appSlice.reducer;
