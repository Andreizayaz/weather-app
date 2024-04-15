import { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { setCoord } from "./store/reducers";
import { CHANGE_TOWN, MY_LOCATION } from "./helpers/consts";
import { ReactComponent as PathIcon } from "src/assets/Path.svg";

import "./City.scss";
import { useGeoLocation } from "src/components/hooks/useGeoLocation";


type CityPropsTypes = {
  town: string;
};

export const City: FC<CityPropsTypes> = ({ town }): ReactElement => {
  const {coords}=useGeoLocation()
  const dispatch = useDispatch();

  const handleCoord = () => {
    if (coords) {
      dispatch(setCoord(coords));
    }
  };

  return (
    <div className="city">
      <h2 className="city__top">{town}</h2>
      <div className="city__bottom">
        <button className="change-btn">{CHANGE_TOWN}</button>
        <div className="location">
          <PathIcon />
          <button className="my-location" onClick={handleCoord}>
            {MY_LOCATION}
          </button>
        </div>
      </div>
    </div>
  );
};
