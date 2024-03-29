import { createSelector } from "@reduxjs/toolkit";

import { getLoginState } from "../getLoginState/getLoginState";

export const getLoginIsLoading = createSelector(getLoginState, (loginForm) => loginForm.isLoading);
