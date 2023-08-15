import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  isCounterVisible: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    incrementCounter(state) {
      state.counter++;
    },
    decrementCounter(state) {
      state.counter--;
    },
    toggleCounterVisibility(state) {
      state.isCounterVisible = !state.isCounterVisible;
    },
  },
});

export const { incrementCounter, decrementCounter, toggleCounterVisibility } =
  counterSlice.actions;

export default counterSlice.reducer;
