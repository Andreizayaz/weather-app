import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CoordType } from "src/services/types";

export type LocationStateType =  {
  coord: CoordType | null;
  city: string | null;
}

const initialState: LocationStateType = {
  coord: null,
  city: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCoord: (state, action: PayloadAction<CoordType>) => {
      console.log('payload', action.payload)
      state.coord = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCoord, setCity  } = locationSlice.actions;

export default locationSlice.reducer;
