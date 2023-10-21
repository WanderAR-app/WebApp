import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
  OnClick?: () => void;
}

const RoundButtonClicked = ({ children, OnClick }: Props) => {
  return (
    <button className="RoundButtonClicked" onClick={OnClick}>
      {children}
    </button>
  );
};
export default RoundButtonClicked;
