import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../components/axios";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);
export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/auth/register", params);
    return data;
  }
);
export const fetchTestResult = createAsyncThunk(
  "test-start/fetchTestResult",
  async (result) => {
    const { data } = await axios.patch("/test-start", result);
    return data;
  }
);
export const fetchDoneSend = createAsyncThunk(
  "done/fetchDoneSend",
  async (params) => {
    const { data } = await axios.post("/done", params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = "loaded";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.data = null;
        state.status = "error";
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchTestResult.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchTestResult.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchTestResult.rejected, (state) => {
        state.status = "loading";
        state.data = null;
      });
  },
});
export const selectIsAuth = (state) => Boolean(state.auth.data);
export const selectResult = (state) => {
  console.log(state);
  return state.auth.data;
};

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
