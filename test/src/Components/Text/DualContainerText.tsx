import React, { ReactNode } from 'react';
import '../style.css'

interface Props {
    children: ReactNode;
}

const DualContainerText = ({children}: Props) => {
    return (
        <div className="DualContainerText">
            {children}
        </div>
    )
}
export default DualContainerText;