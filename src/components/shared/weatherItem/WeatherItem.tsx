import { FC, ReactElement } from "react";

import "./WeatherItem.scss";

type WeatherItemPropsTypes = {
  heading: string;
  description: string;
};

export const WeatherItem: FC<WeatherItemPropsTypes> = ({
  heading,
  description,
}): ReactElement => (
  <div className="weather-item">
    <h4 className="heading">{heading}</h4>
    <p className="desc">{description}</p>
  </div>
);
