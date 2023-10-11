import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
  OnClick?: () => void;
}

const IconButton = ({ children, OnClick }: Props) => {
  return (
    <button className="IconButton" onClick={OnClick}>
      {children}
    </button>
  );
};
export default IconButton;
