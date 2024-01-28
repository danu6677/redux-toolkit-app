import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitailState {
  newText: string;
}
const initialState: InitailState = {
  newText: "",
};

const initialSlice = createSlice({
  name: "initial",
  initialState,
  reducers: {
    textChange: (state, action: PayloadAction<string>) => {
      state.newText = action.payload; //Value is the initail state
    },
  },
});

export const { textChange } = initialSlice.actions;
export default initialSlice.reducer;
