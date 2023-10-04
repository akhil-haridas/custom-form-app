import { configureStore } from "@reduxjs/toolkit";
import documentReducer from "../redux/slices/documentSlice";

const store = configureStore({
  reducer: {
    documents: documentReducer,
  },
});

export default store;
