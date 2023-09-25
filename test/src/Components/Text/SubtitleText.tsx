import React, { ReactNode } from 'react';
import '../style.css'

interface Props {
    children: ReactNode;
}

const SubtitleText = ({children}: Props) => {
    return (
        <div className="SubtitleText">
            {children}
        </div>
    )
}
export default SubtitleText;