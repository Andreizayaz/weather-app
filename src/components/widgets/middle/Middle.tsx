import { FC, ReactElement } from "react";
import { Temperature } from "src/components/entities";

import "./Middle.scss";

export const Middle: FC = (): ReactElement => (
  <div className="middle">
    <Temperature />
  </div>
);
