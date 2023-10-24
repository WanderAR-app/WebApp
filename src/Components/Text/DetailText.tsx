import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const DetailText = ({ children }: Props) => {
  return <div className="DetailText">{children}</div>;
};
export default DetailText;
