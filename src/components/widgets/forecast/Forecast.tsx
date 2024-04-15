import { FC, ReactElement } from "react";
import { City, Temperature, Units, Weather } from "src/components/entities";

import "./Forecast.scss";
import { useForecast, useGeoLocation } from "src/components/hooks";

export const Forecast: FC = (): ReactElement => {
  const { coords } = useGeoLocation();
  const { forecast, error, isLoading } = useForecast(coords);
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
