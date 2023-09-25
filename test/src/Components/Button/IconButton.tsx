import React, { ReactNode } from 'react';
import '../style.css'
import WhiteButton from "./WhiteButton";

interface Props {
    children: ReactNode;
    OnClick?: () => void;
}

const IconButton = ({children, OnClick}: Props) => {
    return (
        <button className="IconButton" onClick={OnClick}>
            {children}
        </button>
    )
}
export default IconButton;