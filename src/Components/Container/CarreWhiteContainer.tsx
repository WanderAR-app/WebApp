import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const CarreWhiteContainer = ({ children }: Props) => {
  return <div className="CarreWhiteContainer">{children}</div>;
};
export default CarreWhiteContainer;
