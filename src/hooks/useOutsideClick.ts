import { useEffect, useRef } from "react";

export function useOutsideClick<element extends HTMLElement>(callback: () => void) {
    const ref = useRef<element>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback]);

    return ref;
};
