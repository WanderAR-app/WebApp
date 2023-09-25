import React, { ReactNode } from 'react';
import '../style.css'

interface Props {
    children: ReactNode;
}

const BlueButtonText = ({children}: Props) => {
    return (
        <div className="BlueButtonText">
            {children}
        </div>
    )
}
export default BlueButtonText;