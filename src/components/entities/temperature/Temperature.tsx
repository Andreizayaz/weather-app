import { FC, ReactElement } from "react";
import { ReactComponent as SunIcon } from "src/assets/Sun.svg";

import "./Temperature.scss";

export const Temperature: FC = (): ReactElement => (
  <div className="temperature">
    <div className="icon-and-degrees">
      <SunIcon />
      <h2 className="degrees"> 19º</h2>
    </div>
    <div className="desc">Преимущественно солнечно</div>
  </div>
);
