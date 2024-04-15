import { FC, ReactElement } from "react";
import { WeatherItem } from "src/components/shared";

import "./Weather.scss";
import { getWeatherData } from "./helpers/helpers";
import { ForecastType } from "src/services";

type WeatherPropsTypes = {
  forecast: ForecastType;
};

export const Weather: FC<WeatherPropsTypes> = ({ forecast }): ReactElement => (
  <ul className="weather">
    {getWeatherData(forecast).map((item) => (
      <li key={Math.random() * 10} className="weather__item">
        <WeatherItem heading={item?.heading} description={item?.description} />
      </li>
    ))}
  </ul>
);
