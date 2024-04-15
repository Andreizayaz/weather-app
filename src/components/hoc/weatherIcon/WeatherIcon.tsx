import { FC, ReactElement } from "react";
import { CLOUD, PARTLY_CLOUDY, RAIN, STORM, SUN } from "./helpers/consts";
import { ReactComponent as CloudIcon } from "src/assets/Cloud.svg";
import { ReactComponent as RainIcon } from "src/assets/Rain.svg";
import { ReactComponent as StormIcon } from "src/assets/Storm.svg";
import { ReactComponent as PartlyCloudyIcon } from "src/assets/PartlyCloudy.svg";
import { ReactComponent as SunIcon } from "src/assets/Sun.svg";

type WeatherIconPropsTypes = {
  iconType: string;
};

export const WeatherIcon: FC<WeatherIconPropsTypes> = ({ iconType }): ReactElement => {
  if (iconType === CLOUD) {
    return <CloudIcon />;
  }

  if (iconType === RAIN) {
    return <RainIcon />;
  }

  if (iconType === STORM) {
    return <StormIcon />;
  }

  if (iconType === PARTLY_CLOUDY) {
    return <PartlyCloudyIcon />;
  }

  if (iconType === SUN) {
    return <SunIcon />;
  }

  return <></>;
};
