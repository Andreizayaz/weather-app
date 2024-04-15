import { useSelector } from "react-redux";
import { forecastAPI } from "src/services";
import { CoordType } from "src/services/types";
import { selectUnit } from "../entities/units/store";

export const useForecast = (coords: CoordType) => {
  const units = useSelector(selectUnit);

  const {
    data: forecast,
    error,
    isLoading,
  } = forecastAPI.useGetForecastByCoordsQuery({ ...coords, units });

  return { forecast, error, isLoading };
};
