import { FC, FormEvent, ReactElement, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCity, setCoord } from "./store/reducers";
import { CHANGE_TOWN, MY_LOCATION } from "./helpers/consts";
import { ReactComponent as PathIcon } from "src/assets/Path.svg";

import "./City.scss";
import { useGeoLocation } from "src/components/hooks/useGeoLocation";
import { Search } from "src/components/shared";

type CityPropsTypes = {
  town: string;
};

export const City: FC<CityPropsTypes> = ({ town }): ReactElement => {
  const [isInput, setIsInput] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { coords } = useGeoLocation();
  const dispatch = useDispatch();

  const handleCoord = () => {
    if (coords) {
      dispatch(setCoord(coords));
    }
  };

  const showInput = () => setIsInput(true);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      dispatch(setCity(inputRef.current?.value));
      setIsInput(false);
    }
  };

  return (
    <div className="city">
      <h2 className="city__top">{town}</h2>
      <div className="city__bottom">
        {!isInput && (
          <button className="change-btn" onClick={showInput}>
            {CHANGE_TOWN}
          </button>
        )}
        {isInput && <Search handleSearch={handleSearch} inputRef={inputRef} />}
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
