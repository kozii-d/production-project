import { createAsyncThunk } from "@reduxjs/toolkit";

import { Article } from "entities/Article";

import { ThunkConfig } from "app/providers/StoreProvider";

import { getArticlesPageLimit, getArticlesPageNumber } from "../../selectors/articlesPageSelectors";

interface FetchArticlesListProps {
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlePage/fetchArticlesList", async (props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const limit = getArticlesPageLimit(getState());
  const page = getArticlesPageNumber(getState());

  try {
    const response = await extra.api.get<Article[]>("/articles", {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue("error");
  }
});
