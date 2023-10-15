import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const DirectionBigText = ({ children }: Props) => {
  return <div className="DirectionBigText">{children}</div>;
};
export default DirectionBigText;
