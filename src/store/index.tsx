import { configureStore } from "@reduxjs/toolkit";
// ...
import AuthReducer from "./slice/authSlice";
import SnackbarReducer from "./slice/snackbarSlice";

export const store = configureStore({
  reducer: {
    snackbar: SnackbarReducer,
    auth: AuthReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;