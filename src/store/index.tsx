import { configureStore } from "@reduxjs/toolkit";
// ...
import AppReducer from "./slice/appSlice";
import AuthReducer from "./slice/authSlice";
import GenreReducer from "./slice/genreSlice";
import MovieReducer from "./slice/movieSlice";
import SnackbarReducer from "./slice/snackbarSlice";
import UserReducer from "./slice/userSlice";
import MovieGenreReducer from "./slice/movieGenresSlice";

export const store = configureStore({
  reducer: {
    snackbar: SnackbarReducer,
    auth: AuthReducer,
    user: UserReducer,
    app: AppReducer,
    movie: MovieReducer,
    genre: GenreReducer,
    movieGenres: MovieGenreReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
