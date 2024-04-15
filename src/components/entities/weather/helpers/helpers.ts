import { ForecastType } from "src/services";
import {
  CHANCE_OF_RAIN,
  HUMIDITY,
  HUMIDITY_UNIT,
  PRESSURE,
  PRESSURE_UNIT,
  WIND,
  WIND_UNIT,
} from "./consts";

function getDirection(deg: number) {
  const directions = [
    "северный",
    "северо-восточный",
    "восточный",
    "юго-восточный",
    "южный",
    "юго-западный",
    "западный",
    "северо-западный",
  ];
  const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  return directions[index];
}

export const getWeatherData = (forecast: ForecastType) => {
  const wind_desc = `${Math.round(forecast.wind.speed)} ${WIND_UNIT}, ${getDirection(
    forecast.wind.deg
  )}`;
  const pressure_desc = `${forecast.main.pressure} ${PRESSURE_UNIT}`;
  const humidity_desc = `${forecast.main.humidity}${HUMIDITY_UNIT}`;

  return [
    {
      heading: WIND,
      description: wind_desc,
    },
    {
      heading: PRESSURE,
      description: pressure_desc,
    },
    {
      heading: HUMIDITY,
      description: humidity_desc,
    },
    {
      heading: CHANCE_OF_RAIN,
      description: "?",
    },
  ];
};
