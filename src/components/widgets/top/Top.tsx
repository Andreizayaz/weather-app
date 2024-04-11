import { FC, ReactElement } from "react";

import "./Top.scss";
import { City, Units } from "src/components/entities";

export const Top: FC = (): ReactElement => (
  <div className="top">
    <City />
    <Units />
  </div>
);
