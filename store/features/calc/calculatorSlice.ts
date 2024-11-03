import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  firstNumber: number | null;
  secondNumber: number | null;
  result: number | null;
}

const initialState: CalculatorState = {
  firstNumber: null,
  secondNumber: null,
  result: null,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setFirstNumber: (state, action: PayloadAction<number | null>) => {
      state.firstNumber = action.payload;
    },
    setSecondNumber: (state, action: PayloadAction<number | null>) => {
      state.secondNumber = action.payload;
    },
    calculateResult: (
      state,
      action: PayloadAction<"sum" | "subtract" | "multiply" | "divide">
    ) => {
      if (state.firstNumber === null || state.secondNumber === null) {
        state.result = null;
        return;
      }

      switch (action.payload) {
        case "sum":
          state.result = state.firstNumber + state.secondNumber;
          break;
        case "subtract":
          state.result = state.firstNumber - state.secondNumber;
          break;
        case "multiply":
          state.result = state.firstNumber * state.secondNumber;
          break;
        case "divide":
          if (state.secondNumber !== 0) {
            state.result = state.firstNumber / state.secondNumber;
          } else {
            state.result = null;
          }
          break;
      }
    },
  },
});

export const { setFirstNumber, setSecondNumber, calculateResult } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
