import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LazyLoadingLoader from "../Components/Loaders/Loader";
const Home = React.lazy(() => import("../view/Home"));
const OtherPage = React.lazy(() => import("../view/AnOtherPage"));

const BaseRoutes = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoadingLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/other-page">
            <OtherPage />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default BaseRoutes;
