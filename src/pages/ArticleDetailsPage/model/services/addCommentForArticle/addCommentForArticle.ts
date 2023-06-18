import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article";
import { Comment } from "entities/Comment";
import {
  fetchCommentsByArticleId,
} from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  "articleDetails/sendComment",
  async (text, thunkAPI) => {
    const {
      dispatch, extra, rejectWithValue, getState,
    } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue("no data");
    }

    try {
      const response = await extra.api.post<Comment>("/comments", {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue("error");
    }
  },
);
