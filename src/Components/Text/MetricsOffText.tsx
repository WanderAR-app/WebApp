import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const MetricsOffText = ({ children }: Props) => {
  return <div className="MetricsOffText">{children}</div>;
};
export default MetricsOffText;
