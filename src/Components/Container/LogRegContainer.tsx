import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const LogRegContainer = ({ children }: Props) => {
  return <div className="LogRegContainer">{children}</div>;
};
export default LogRegContainer;
