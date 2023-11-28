import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { IStore } from "types";


export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(true);
    const user = useSelector((state: IStore) => state.auth.user);

    useEffect(() => {
        if (user) return;

        const tokens = localStorage.getItem("Zen-Door-Token") || sessionStorage.getItem("Zen-Door-Token");

        setIsAuth(Boolean(tokens));
    });

    return { isAuth, user };
};