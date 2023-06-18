import { StateSchema } from "app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../slices/articleDetailsCommentsSlice";

export const getArticleCommentsState = (state: StateSchema) => state?.articleDetailsComments || initialState;

export const getArticleCommentsIsLoading = createSelector(getArticleCommentsState, (articleComments) => articleComments.isLoading);
export const getArticleCommentsIsAdding = createSelector(getArticleCommentsState, (articleComments) => articleComments.isAdding);
export const getArticleCommentsError = createSelector(getArticleCommentsState, (articleComments) => articleComments.error);
