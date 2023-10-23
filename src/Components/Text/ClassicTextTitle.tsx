import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const ClassicTextTitle = ({ children }: Props) => {
  return <div className="ClassicTextTitle">{children}</div>;
};
export default ClassicTextTitle;
