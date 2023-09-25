import { ReactNode } from 'react';
import '../style.css'

interface Props {
    children: ReactNode;
}

const DualContainer = ({children}: Props) => {
    return (
        <div className="DualContainer">
            {children}
        </div>
    )
}
export default DualContainer;