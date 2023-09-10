import { Story } from "@storybook/react";

import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";

import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";

import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { articlesPageReducer } from "pages/ArticlesPage/model/slice/articlesPageSlice";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articlesPage: articlesPageReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
