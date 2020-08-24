import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import AuthPages from "./pages/AuthPages";
import TerminalsPage from "./pages/TerminalsPage";
import BuyersPage from "./pages/BuyersPage";
import NotFountPage from "./pages/NotFountPage";
import DetailBuyersPage from "./pages/DetailBuyersPage";

export const useRouter = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/terminals" exact>
          <TerminalsPage />
        </Route>
        <Route path="/buyers" exact>
          <BuyersPage />
        </Route>
        <Route path="/buyers/:id">
          <DetailBuyersPage />
        </Route>
        <Redirect to="/terminals"/>
      </Switch>
    );
  }

  return (
    <Switch>
        <Route path="/" exact>
          <AuthPages/>
        </Route>
        <Redirect to="/"/>
    </Switch>
  )
};
