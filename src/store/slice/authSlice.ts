import UserSlice, { LoginUserType, RegisterUserType } from "@/types/user";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: UserSlice = {
  item: [],
  isError: null,
  isLoading: false,
};
export const registerThunk = createAsyncThunk(
  "/slice/auth",
  async (options: RegisterUserType) => {
    const { username, email, password, onSuccess, onError } = options;
    try {
      if (email === "nawram@gmail.com" || password === "nawram123") {
        const response = await fetch(`${config.apiBaseUrl}/signIn`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        });
        const { user } = await response.json();
        console.log(user);
        onSuccess && onSuccess();
      } else {
        const response = await fetch(`${config.apiBaseUrl}/signIn`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        });
        const { user } = await response.json();
        // console.log(user);
        onSuccess && onSuccess();
      }
    } catch (error) {
      console.log(error);
      onError && onError();
    }
  }
);
export const loginThunk = createAsyncThunk(
  "/auth/login",
  async (options: LoginUserType) => {
    const { email, password, onSuccess, onError } = options;
    try {
      if (email === "nawram@gmail.com" || password === "nawram123") {
        const response = await fetch(`${config.apiBaseUrl}/signIn`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password, role: "admin" }),
        });
        const user = await response.json();
        // console.log("user,", user);
        onSuccess && onSuccess();
      } else {
        const response = await fetch(`${config.apiBaseUrl}/signIn`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password, role: "user" }),
        });
        const user = await response.json();
        console.log("user,", user);
        onSuccess && onSuccess();
      }
    } catch (error) {
      console.log(error);
      onError && onError();
    }
  }
);
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});
export const {} = authSlice.actions;
export default authSlice.reducer;
