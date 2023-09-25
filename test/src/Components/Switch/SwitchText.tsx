import Switch from 'react-switch'
import { SetStateAction, useState } from 'react';
import '../style.css'
import MetricsOnText from "./../Text/MetricsOnText";
import MetricsOffText from "./../Text/MetricsOffText";

interface Props {
}

const SwitchText = ({}: Props) => {

    const [checked, setChecked] = useState(false);
    const handleChange = (bool: SetStateAction<boolean>) => {
        setChecked(bool);
    };

    return (
        <div style={{width: "20%"}}>
            <Switch
                onChange={handleChange}
                checked={checked}
                handleDiameter={25}
                offColor="#ECF0F3"
                offHandleColor='#ECF0F3'
                onColor="#ECF0F3"
                onHandleColor='#ECF0F3'
                boxShadow="-2px -2px 5px 0px #FFF inset, 2px 2px 5px 0px #D1D9E6 inset"
                className="SwitchText"
                uncheckedHandleIcon={<MetricsOnText> yds </MetricsOnText>}
                checkedHandleIcon={<MetricsOnText> yds </MetricsOnText>}
                uncheckedIcon={<MetricsOffText> m </MetricsOffText>}
                checkedIcon={<MetricsOffText> m </MetricsOffText>}
                height={35}
                width={70}
            />
        </div>
    )
}
export default SwitchText;