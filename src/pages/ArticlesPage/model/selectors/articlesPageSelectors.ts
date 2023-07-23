import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";

import { initialState } from "../slice/articlesPageSlice";

const getArticlesPageState = (state: StateSchema) => state?.articlesPage || initialState;

export const getArticlesPageIsLoading = createSelector(getArticlesPageState, (articlesPage) => articlesPage.isLoading);
export const getArticlesPageError = createSelector(getArticlesPageState, (articlesPage) => articlesPage.error);
export const getArticlesPageView = createSelector(getArticlesPageState, (articlesPage) => articlesPage.view);
export const getArticlesPageLimit = createSelector(getArticlesPageState, (articlesPage) => articlesPage.limit);
export const getArticlesPageNumber = createSelector(getArticlesPageState, (articlesPage) => articlesPage.page);
export const getArticlesPageHasMore = createSelector(getArticlesPageState, (articlesPage) => articlesPage.hasMore);
