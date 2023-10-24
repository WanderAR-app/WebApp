import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const WhiteContainer = ({ children }: Props) => {
  return <div className="WhiteContainer">{children}</div>;
};
export default WhiteContainer;
