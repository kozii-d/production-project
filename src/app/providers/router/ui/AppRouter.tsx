import React, { memo, Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
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
};

export default memo(AppRouter);
