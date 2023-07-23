import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Comment } from "entities/Comment";

import { StateSchema } from "app/providers/StoreProvider";

import { addCommentForArticle } from "../services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

export const initialState = commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
  isLoading: false,
  isAdding: false,
  error: undefined,
  ids: [],
  entities: {},
});

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      },
    );
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addCommentForArticle.pending, (state) => {
      state.isAdding = true;
    });
    builder.addCase(
      addCommentForArticle.fulfilled,
      (state) => {
        state.isAdding = false;
      },
    );
    builder.addCase(addCommentForArticle.rejected, (state) => {
      state.isAdding = false;
    });
  },
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
