import { AuthState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthState>) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.accessToken = action.payload.accessToken;
    },
    clearAuth(state, action: PayloadAction) {
      state.isAuthenticated = false;
      state.accessToken = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
