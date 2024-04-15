import { forecastAPI } from "src/services";
import { CoordType } from "src/services/types";

export const useForecast = (coords: CoordType) => {
  const {
    data: forecast,
    error,
    isLoading,
  } = forecastAPI.useGetForecastByCoordsQuery(coords);

  return { forecast, error, isLoading };
};
