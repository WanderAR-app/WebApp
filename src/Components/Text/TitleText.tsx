import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const TitleText = ({ children }: Props) => {
  return <div className="TitleText">{children}</div>;
};
export default TitleText;
