import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
  OnClick?: () => void;
}

const WhiteGlassMoButton = ({ children, OnClick }: Props) => {
  return (
    <button className="WhiteGlassMoButton" onClick={OnClick}>
      {children}
    </button>
  );
};
export default WhiteGlassMoButton;
