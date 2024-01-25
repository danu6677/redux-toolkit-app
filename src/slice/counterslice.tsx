import {PayloadAction, createSlice} from '@reduxjs/toolkit';

// Action, Recuders and Sate goes here. No need separate boilerplate code
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1; //Value is the initail state
    },
    decrement: state => {
      state.value -= 1; //Value is the initail state
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload; //Value is the initail state
    },
  },
});

export const {increment, decrement, incrementBy} = counterSlice.actions;
export default counterSlice.reducer;
