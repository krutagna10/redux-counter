import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counter: 0,
  isCounterVisible: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounterVisibility(state) {
      state.isCounterVisible = !state.isCounterVisible;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
