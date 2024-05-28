import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../components/axios";

export const fetchLessons = createAsyncThunk(
  "lessons/fetchLessons",
  async () => {
    const { data } = await axios.get("/lessons");
    return data;
  }
);
export const fetchTest = createAsyncThunk("test/fetchTest", async () => {
  const { data } = await axios.get("/test");
  return data;
});

const initialState = {
  lessons: {
    items: [],
    status: "loading",
  },
  test: {
    questions: [],
    status: "loading",
  },
};

const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.pending, (state) => {
        state.lessons.status = "loading";
      })
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.lessons.status = "loaded";
        state.lessons.items = action.payload;
      })
      .addCase(
        fetchLessons.rejected,
        (state) => (state.lessons.status = "error")
      )
      .addCase(fetchTest.pending, (state) => {
        state.test.status = "loading";
      })
      .addCase(fetchTest.fulfilled, (state, action) => {
        state.test.status = "loaded";
        state.test.questions = action.payload;
      })
      .addCase(fetchTest.rejected, (state) => {
        state.test.status = "error";
      });
  },
});

export const lessonsReducer = lessonsSlice.reducer;
export const lessonsData = (state) => {
  console.log(state);
  return state.lessons.items;
};
export const selectQuestions = (state) => {
  return state.lessons.test.questions; // Переконайтеся, що правильно вказано шлях до питань
};
