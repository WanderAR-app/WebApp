import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const DirectionSmallText = ({ children }: Props) => {
  return <div className="DirectionSmallText">{children}</div>;
};
export default DirectionSmallText;
