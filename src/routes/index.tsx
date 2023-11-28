import React, { createElement, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "./const";
import { Layout } from "components";
import { useAuth } from "hooks";

export const AppRoutes = () => {
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        {ROUTES.map((rout) => (
          <Route
            key={rout.id}
            path={rout.path}
            element={createElement(rout.element)}
          />
        ))}
      </Route>
    </Routes>
  );
};
