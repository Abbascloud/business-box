import React from "react";
import { NavLink } from "react-router-dom";
import { E_ROUTES } from "../../../routes/enum";
import { Logo } from "../../Logo";

export const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <NavLink to={E_ROUTES.HOME}>
            <Logo />
          </NavLink>

          <div>
            <NavLink to={E_ROUTES.LOGIN}>Login</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};
