import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData, updateUserData } from "@/apis/user";
import { User } from "types";

interface InitialState {
  data: User | null;
  status: "loading" | "success" | "error";
  error: string | null;
}

const initialState: InitialState = {
  data: null,
  status: "success",
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const { data } = await fetchUserData();
  return data.data;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData: User) => {
    const { data } = await updateUserData(userData);
    return data.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Failed to fetch user";
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Failed to update user";
      });
  },
});

export const userReducer = userSlice.reducer;
