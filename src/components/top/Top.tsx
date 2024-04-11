import { FC, ReactElement } from "react";
import { Widget } from "../widget";
import { City } from "../city";
import { Units } from "../units";

import "./Top.scss";

export const Top: FC = (): ReactElement => (
  <Widget classes="space-between">
    <City />
    <Units />
  </Widget>
);
