import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../store/features/calc/calculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
// hooks/redux.ts
