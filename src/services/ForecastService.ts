import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoordType, ForecastType } from "./types";

export const forecastAPI = createApi({
  reducerPath: "forecastAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  }),
  tagTypes: ["Forecast"],
  endpoints: (build) => ({
    getForecastByCoords: build.query<ForecastType, CoordType>({
      query: ({ lat, lon, units = "metric" }: CoordType) => ({
        url: "",
        params: {
          lat,
          lon,
          lang: "ru",
          appid: "6db7082575af761ae7eb57503c5c652b",
          units,
        },
      }),
      providesTags: (result) => ["Forecast"],
    }),
  }),
});
