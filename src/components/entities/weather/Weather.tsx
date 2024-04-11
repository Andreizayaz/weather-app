import { FC, ReactElement } from "react";
import { weatherData } from "./helpers/consts";
import { WeatherItem } from "src/components/shared";

import "./Weather.scss";

export const Weather: FC = (): ReactElement => (
  <ul className="weather">
    {weatherData.map((item) => (
      <li key={Math.random() * 10} className="weather__item">
        <WeatherItem heading={item?.heading} description={item?.description} />
      </li>
    ))}
  </ul>
);
