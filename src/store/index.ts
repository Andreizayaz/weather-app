import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { forecastAPI } from "../services/ForecastService";
import { unitReducer } from "src/components/entities/units/store";

const rootReducer = combineReducers({
  unit: unitReducer,
  [forecastAPI.reducerPath]: forecastAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(forecastAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
