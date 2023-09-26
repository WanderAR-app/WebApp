import React, { ReactNode } from 'react';
import '../style.css'

interface Props {
    children: ReactNode;
}

const BlueGlassMoText = ({children}: Props) => {
    return (
        <div className="BlueGlassMoText">
            {children}
        </div>
    )
}
export default BlueGlassMoText;