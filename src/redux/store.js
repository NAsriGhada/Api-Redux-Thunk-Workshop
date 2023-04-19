import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./dogSlice";

const store = configureStore({
  reducer: {
    dog: dogReducer,
  },
});

export default store;
