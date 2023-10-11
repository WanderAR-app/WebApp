import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const GlassMoContainer = ({ children }: Props) => {
  return <div className="GlassMoContainer">{children}</div>;
};
export default GlassMoContainer;
