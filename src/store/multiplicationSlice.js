import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfTests: 20,
  status: "idle",
};

const multiplicationSlice = createSlice({
  name: "multiplication",
  initialState,
  reducers: {
    setNumberOfTests: (state, action) => {
      state.numberOfTests = action.payload;
    },
  },
});

export const { setNumberOfTests } = multiplicationSlice.actions;
export default multiplicationSlice;
