import { useState } from "react";

export const useToggle: (startValue: boolean) => [boolean, () => void] = (startValue: boolean) => {

    const [value, setValue] = useState(startValue);

    const toggleValue = () => {
        setValue(!value);
    };
    return [value, toggleValue];
};