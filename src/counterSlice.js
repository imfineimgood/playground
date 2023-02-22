import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    //복사 안해도 됨
    up: (state, action) => {
      state.value += state.value + action.payload;
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
