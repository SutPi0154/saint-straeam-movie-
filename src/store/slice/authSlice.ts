import UserSlice, { LoginUserType, RegisterUserType } from "@/types/user";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: UserSlice = {
  item: [],
  iserror: null,
  isLoading: false,
};
export const registerThunk = createAsyncThunk(
  "/slice/auth",
  async (options: RegisterUserType) => {
    const { username, email, password, onSuccess, onError } = options;
    try {
      const response = await fetch(`${config.apiBaseUrl}/auth`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      onSuccess && onSuccess();
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
      const response = await fetch(`${config.apiBaseUrl}/auth`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      onSuccess && onSuccess();
    } catch (error) {
      console.log(error);
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
