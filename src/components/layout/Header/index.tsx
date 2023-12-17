import React from "react";
import { NavLink } from "react-router-dom";
import { E_ROUTES } from "../../../routes/enum";

import { useTextMaker } from "hooks";
import * as styles from "./style.module.scss";

export const Header = () => {
  const t = useTextMaker("header");
  return (
    <header className={styles.header}>
      <div>
        <nav>
          <NavLink to={E_ROUTES.HOME}>{t("nav.home")}</NavLink>
          <NavLink to={E_ROUTES.EMPLOYEES}>{t("nav.employees")}</NavLink>
        </nav>
      </div>
    </header>
  );
};
