import { StateSchema } from "app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../slice/articlesPageSlice";

const getArticlesPageState = (state: StateSchema) => state?.articlesPage || initialState;

export const getArticlesPageIsLoading = createSelector(getArticlesPageState, (articlesPage) => articlesPage.isLoading);
export const getArticlesPageError = createSelector(getArticlesPageState, (articlesPage) => articlesPage.error);
export const getArticlesPageView = createSelector(getArticlesPageState, (articlesPage) => articlesPage.view);
