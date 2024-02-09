import { configureStore } from "@reduxjs/toolkit";
// ...
import AuthReducer from "./slice/authSlice";
import SnackbarReducer from "./slice/snackbarSlice";
import UserReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    snackbar: SnackbarReducer,
    auth: AuthReducer,
    user: UserReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
