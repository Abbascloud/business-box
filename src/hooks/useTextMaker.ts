
import { useTranslation } from "react-i18next";

export const useTextMaker = (path: string) => {
    const { t } = useTranslation();

    return (key: string) => { return t(`${path}.${key}`); };
};