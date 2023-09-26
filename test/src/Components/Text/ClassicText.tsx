import React, { ReactNode } from 'react';
import '../style.css'

interface Props {
    children: ReactNode;
}

const ClassicText = ({children}: Props) => {
    return (
        <div className="ClassicText">
            {children}
        </div>
    )
}
export default ClassicText;