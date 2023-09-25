import React, { ReactNode } from 'react';
import '../style.css'

interface Props {
    children: ReactNode;
    OnClick?: () => void;
}

const RoundButton = ({children, OnClick}: Props) => {
    return (
        <button className="RoundButton" onClick={OnClick}>
            {children}
        </button>
    )
}
export default RoundButton;