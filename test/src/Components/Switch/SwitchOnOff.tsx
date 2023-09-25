import Switch from 'react-switch'
import { SetStateAction, useState } from 'react';
import '../style.css'

interface Props {
}

const SwitchOnOff = ({}: Props) => {

    const [checked, setChecked] = useState(false);
    const handleChange = (bool: SetStateAction<boolean>) => {
        setChecked(bool);
    };

    return (
        <div style={{width: "20%"}}>
            <Switch
                onChange={handleChange}
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                handleDiameter={25}
                offColor="#D2D3D6"
                offHandleColor='#ECF0F3'
                onColor="#1A5FF2"
                onHandleColor='#ECF0F3'
                boxShadow="-2px -2px 5px 0px #FFF inset, 2px 2px 5px 0px #D1D9E6 inset"
                className="SwitchOnOff"
                height={35}
                width={70}
            />
        </div>
    )
}
export default SwitchOnOff;