import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
  OnClick?: () => void;
}

const SettingContainer = ({ children, OnClick }: Props) => {
  return (
    <div className="SettingContainer" onClick={OnClick}>
      {children}
    </div>
  );
};
export default SettingContainer;
