import { Home, Page404, Login } from "pages";
import { E_ROUTES } from "./enum";

export const ROUTES = [
    {
        path:E_ROUTES.LOGIN,
        name:"главная страница",
        id:"login",
        element:Login
    },
    {
        path:E_ROUTES.HOME,
        id:"home",
        name:"вход",
        element:Home
    },
    {
        path:E_ROUTES.UNKNOWN,
        id:"404",
        name:"404",
        element:Page404
        
    }
];

