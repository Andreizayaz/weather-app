import { FC, ReactElement } from "react";
import { City, Temperature, Units, Weather } from "src/components/entities";

import "./Forecast.scss";
import { useForecast } from "src/components/hooks";
import { changeBodyBg } from "./helpers/functions";

export const Forecast: FC = (): ReactElement => {
  const { forecast, error, isLoading } = useForecast();

  const weatherDesc = forecast?.weather[0].main;
  if (weatherDesc) {
    changeBodyBg(weatherDesc);
  }
  return (
    <div className="forecast">
      {error && <h2 className="error">Error occurred</h2>}
      {isLoading && <p>Loading...</p>}
      {forecast && (
        <>
          <div className="top">
            <City town={forecast.name} />
            <Units />
          </div>
          <div className="middle">
            <Temperature
              temp={Math.round(forecast.main.temp)}
              iconType={forecast.weather[0].main}
              desc={forecast.weather[0].description}
            />
          </div>
          <div className="bottom">
            <Weather forecast={forecast} />
          </div>
        </>
      )}
    </div>
  );
};
