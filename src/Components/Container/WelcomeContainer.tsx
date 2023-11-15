import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const WelcomeContainer = ({ children }: Props) => {
  return <div className="WelcomeContainer">{children}</div>;
};
export default WelcomeContainer;
