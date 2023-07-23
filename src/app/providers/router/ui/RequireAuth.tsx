import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { RoutePath } from "shared/config/routeConfig";

import { getUserAuthData } from "entities/User";

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
