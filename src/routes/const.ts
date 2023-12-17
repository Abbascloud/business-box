import { Home, Page404, Login, Employees } from "pages";
import { E_ROUTES } from "./enum";

export const ROUTES = [
    {
        path: E_ROUTES.LOGIN,
        name: "Вход",
        id: "login",
        element: Login
    },
    {
        path: E_ROUTES.HOME,
        id: "home",
        name: "Главная страница",
        element: Home
    },
    {
        path: E_ROUTES.UNKNOWN,
        id: "404",
        name: "404",
        element: Page404

    },
    {
        path: E_ROUTES.EMPLOYEES,
        id: "employees",
        name: "Сотрудники",
        element: Employees

    }
];

