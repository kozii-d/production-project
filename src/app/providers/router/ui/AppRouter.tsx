import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        element={(
          <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
              {element}
            </Suspense>
          </div>
        )}
        path={path}
      />
    ))}
  </Routes>
);

export default AppRouter;
