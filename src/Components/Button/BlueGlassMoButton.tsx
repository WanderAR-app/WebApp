import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
  OnClick?: () => void;
}

const BlueGlassMoButton = ({ children, OnClick }: Props) => {
  return (
    <button className="BlueGlassMoButton" onClick={OnClick}>
      {children}
    </button>
  );
};
export default BlueGlassMoButton;
