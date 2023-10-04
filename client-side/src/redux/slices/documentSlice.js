import { createSlice } from "@reduxjs/toolkit";

const documentSlice = createSlice({
  name: "documents",
  initialState: [],
  reducers: {
    addDocument: (state, action) => {
      state.push(action.payload);
    },
    removeDocument: (state, action) => {
      return state.filter((document) => document.id !== action.payload);
    },
    clearDocuments: (state) => {
      return [];
    },
  },
});

export const { addDocument, removeDocument,clearDocuments } = documentSlice.actions;
export default documentSlice.reducer;
