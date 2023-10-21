import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
  OnClick?: () => void;
}

const DualButton = ({ children, OnClick }: Props) => {
  return (
    <button className="DualButton" onClick={OnClick}>
      {children}
    </button>
  );
};
export default DualButton;
