import React, { Suspense, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserInitiated, userActions } from "entities/User";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useAppDispatch();
  const initiated = useSelector(getUserInitiated);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", { hovered: true, selected: false }, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {initiated && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
