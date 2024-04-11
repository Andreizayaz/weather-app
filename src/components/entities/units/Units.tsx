import { FC, ReactElement } from "react";
import { CELSIUS, FAHRENHEIT } from "./helpers/consts";

import "./Units.scss";

export const Units: FC = (): ReactElement => (
  <div className="units">
    <div className="btns">
      <button className="units__item units__item_active">{CELSIUS}</button>
      <button className="units__item">{FAHRENHEIT}</button>
    </div>
  </div>
);
