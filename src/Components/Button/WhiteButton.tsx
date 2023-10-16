import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
  OnClick?: () => void;
}

const WhiteButton = ({ children, OnClick }: Props) => {
  return (
    <button className="WhiteButton" onClick={OnClick}>
      {children}
    </button>
  );
};
export default WhiteButton;
