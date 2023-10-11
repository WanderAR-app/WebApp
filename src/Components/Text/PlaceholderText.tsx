import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const PlaceholderText = ({ children }: Props) => {
  return <div className="PlaceholderText">{children}</div>;
};
export default PlaceholderText;
