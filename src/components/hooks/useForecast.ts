import { selectLocation } from "./../entities/city/store/selectors";
import { useSelector } from "react-redux";
import { forecastAPI } from "src/services";
import { selectUnit } from "../entities/units/store";
import { useGeoLocation } from "./useGeoLocation";

export const useForecast = () => {
  const { coord, city } = useSelector(selectLocation);
  const units = useSelector(selectUnit);
  const { coords } = useGeoLocation();

  if (coord) {
    const {
      data: forecast,
      error,
      isLoading,
    } = forecastAPI.useGetForecastByCoordsQuery({ ...coord, units });

    return { forecast, error, isLoading };
  }

  if (city) {
  }

  const {
    data: forecast,
    error,
    isLoading,
  } = forecastAPI.useGetForecastByCoordsQuery({ ...coords, units });

  return { forecast, error, isLoading }; 
};
