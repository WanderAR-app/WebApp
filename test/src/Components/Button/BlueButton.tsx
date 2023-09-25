import React, { ReactNode } from 'react';
import '../style.css'

interface Props {
    children: ReactNode;
    OnClick?: () => void;
}

const BlueButton = ({children, OnClick}: Props) => {
    return (
        <button className="BlueButton" onClick={OnClick}>
            {children}
        </button>
    )
}
export default BlueButton;