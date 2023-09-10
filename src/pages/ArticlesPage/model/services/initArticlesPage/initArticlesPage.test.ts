import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

import { initArticlesPage } from "./initArticlesPage";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("initArticlesPage", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
  });

  test("initArticlesPage not called", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
