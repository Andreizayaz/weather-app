import { FC, ReactElement } from "react";
import { Weather } from "src/components/entities";

export const Bottom: FC = (): ReactElement => (
  <div className="bottom">
    <Weather />
  </div>
);
