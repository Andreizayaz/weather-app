import { FC, ReactElement } from "react";
import "./Temperature.scss";
import { WeatherIcon } from "src/components/hoc";

type TemperaturePropsTypes = {
  temp: number;
  iconType: string;
  desc:string;
};

export const Temperature: FC<TemperaturePropsTypes> = ({
  temp,
  iconType,
  desc
}): ReactElement => (
  <div className="temperature">
    <div className="icon-and-degrees">
      <WeatherIcon iconType={iconType} />
      <h2 className="degrees"> {temp}º</h2>
    </div>
    <div className="desc">{desc}</div>
  </div>
);
