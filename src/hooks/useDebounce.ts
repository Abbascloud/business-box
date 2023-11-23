import { useEffect, useState } from "react";

type TDebounce = {
    value: string,
    delay: number
}

export const useDebounce = ({ value, delay }: TDebounce) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {

            const t = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);


            return () => {
                clearTimeout(t);
            };
        },
        [value, delay]
    );
    return debouncedValue;
};

export default useDebounce;