import React, { Suspense, useEffect } from "react";

import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getUserInitiated, userActions } from "entities/User";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { AppRouter } from "app/providers/router";

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
