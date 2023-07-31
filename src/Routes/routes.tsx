import React, { lazy } from "react";

import { Routes as Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../Pages/Home/Home"));
const Vaults = lazy(() => import("../Pages/Vaults/Vaults"));
const Summary = lazy(() => import("../Pages/Summary/Summary"));




const routes = () => {


  return (
    <Switch>
      <Route index path="/" element={<Home />} />
      <Route path="/vaults" element={<Vaults />} />
      <Route path="/summary" element={<Summary />} />
    </Switch>
  );
};

export default routes;