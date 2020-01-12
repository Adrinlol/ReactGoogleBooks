import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";

import NavBar from "../layout/Navbar";
import Footer from "../layout/Footer";

import routes from "./config";

const TemporaryFallback = () => (
  <Row type="flex" align="middle" justify="center" gutter={20}>
    <Col>
      <img
        alt="loading"
        src="https://hackernoon.com/hn-images/0*4Gzjgh9Y7Gu8KEtZ.gif"
      />
    </Col>
  </Row>
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
