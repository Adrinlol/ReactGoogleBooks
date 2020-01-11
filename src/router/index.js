import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "../layout/Navbar";
import Footer from "../layout/Footer";

import routes from "./config";

const TemporaryFallback = () => (
  <div className="album-img">
    <img
      alt="loading"
      src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif"
    />
  </div>
);

const Router = () => {
  return (
    <Suspense fallback={<TemporaryFallback />}>
      <NavBar />
      <Switch>
        {routes.map(({ path, page }, key) => (
          <Route
            key={key}
            exact
            path={`/${path}`}
            component={lazy(() => import(`../pages/${page}`))}
          />
        ))}
        <Route component={lazy(() => import(`../pages/Error404`))} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
