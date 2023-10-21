import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const WhiteButtonText = ({ children }: Props) => {
  return <div className="WhiteButtonText">{children}</div>;
};
export default WhiteButtonText;
