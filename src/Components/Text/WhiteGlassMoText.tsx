import React, { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const WhiteGlassMoText = ({ children }: Props) => {
  return <div className="WhiteGlassMoText">{children}</div>;
};
export default WhiteGlassMoText;
