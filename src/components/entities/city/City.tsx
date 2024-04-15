import { FC, ReactElement } from "react";
import { CHANGE_TOWN, MY_LOCATION } from "./helpers/consts";
import { ReactComponent as PathIcon } from "src/assets/Path.svg";

import "./City.scss";

type CityPropsTypes = {
  town: string;
};

export const City: FC<CityPropsTypes> = ({town}): ReactElement => {
  return (
    <div className="city">
      <h2 className="city__top">{town}</h2>
      <div className="city__bottom">
        <button className="change-btn">{CHANGE_TOWN}</button>
        <div className="location">
          <PathIcon />
          <button className="my-location">{MY_LOCATION}</button>
        </div>
      </div>
    </div>
  );
};
