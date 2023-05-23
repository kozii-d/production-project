import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";

import { initialState } from "../../model/slice/articleDetailsSlice";

export const getArticleDetailsState = (state: StateSchema) => state?.articleDetails || initialState;

export const getArticleDetailsIsLoading = createSelector(getArticleDetailsState, (articleDetails) => articleDetails.isLoading);
export const getArticleDetailsData = createSelector(getArticleDetailsState, (articleDetails) => articleDetails.data);
export const getArticleDetailsError = createSelector(getArticleDetailsState, (articleDetails) => articleDetails.error);
