import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

type AsyncReducersType = DeepPartial<ReducersMapObject<StateSchema>>;

const defaultAsyncReducers: AsyncReducersType = {
  loginForm: loginReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: AsyncReducersType) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
