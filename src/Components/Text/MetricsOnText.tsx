import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const MetricsOnText = ({ children }: Props) => {
  return <div className="MetricsOnText">{children}</div>;
};
export default MetricsOnText;
