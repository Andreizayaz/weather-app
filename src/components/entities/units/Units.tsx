import { FC, ReactElement, MouseEvent } from "react";
import { CELSIUS, FAHRENHEIT } from "./helpers/consts";

import "./Units.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "./store/reducers";
import { selectUnit } from "./store";
import { getActiveBtnClassName } from "./helpers/helpers";

export const Units: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const unit = useSelector(selectUnit);

  const changeUnit = (e: MouseEvent<HTMLDivElement>) => {
    const currUnit = (e.target as HTMLButtonElement).value;

    if (currUnit === 'metric') {
      dispatch(setUnit("metric"));
    } else {
      dispatch(setUnit(""));
    }
  };

  return (
    <div className="units">
      <div className="btns" onClick={(e) => changeUnit(e)}>
        <button
          className={`units__item ${getActiveBtnClassName(unit, 'metric')}`}
          value='metric'
        >
          {CELSIUS}
        </button>
        <button
          className={`units__item ${getActiveBtnClassName(unit, '')}`}
          value=''
        >
          {FAHRENHEIT}
        </button>
      </div>
    </div>
  );
};
