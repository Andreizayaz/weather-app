import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UnitStateType = {
  unit: string;
};

const initialState: UnitStateType = {
  unit: 'metric',
};

export const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    setUnit: (state, action: PayloadAction<string>) => {
      state.unit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUnit } = unitSlice.actions;

export default unitSlice.reducer;
