import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDogImages = createAsyncThunk(
  "dog/fetchDogImages",
  async (breed) => {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images`
    //   `https://dog.ceo/api/breed/${breed}/images/random`
    );
    return response.data.message;
  }
);

const dogSlice = createSlice({
  name: "dog",
  initialState: {
    images: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDogImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = action.payload;
      })
      .addCase(fetchDogImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dogSlice.reducer;
