import { FC, ReactElement, ReactNode } from "react";

import "./Widget.scss";

type WidgetPropsTypes = {
  children: ReactNode;
  classes?: string;
};

export const Widget: FC<WidgetPropsTypes> = ({
  children,
  classes = "",
}): ReactElement => <div className={`widget ${classes}`}>{children}</div>;
