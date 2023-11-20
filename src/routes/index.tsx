import React, { createElement } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./const";
import { Layout } from "components";

export const AppRoutes = () => {
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
