import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    selectedProjectId: null,
  },
  reducers: {
    setSelectedProjectId: (state, action) => {
      state.selectedProjectId = action.payload;
    },
    clearSelectedProjectId: (state) => {
      state.selectedProjectId = null;
    },
  },
});

export const { setSelectedProjectId, clearSelectedProjectId } =
  projectSlice.actions;

export default projectSlice.reducer;
