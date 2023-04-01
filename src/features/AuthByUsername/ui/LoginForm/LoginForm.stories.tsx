import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({
    loginForm: {
      username: "someUserName",
      password: "123",
    },
  })],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalWithError = Template.bind({});
NormalWithError.args = {};
NormalWithError.decorators = [StoreDecorator({
  loginForm: {
    username: "someUserName",
    password: "123",
    error: "ERROR",
  },
})];

export const DarkWithError = Template.bind({});
DarkWithError.args = {};

DarkWithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: {
    username: "someUserName",
    password: "123",
    error: "ERROR",
  },
})];

export const NormalWithLoading = Template.bind({});
NormalWithLoading.args = {};
NormalWithLoading.decorators = [StoreDecorator({
  loginForm: {
    username: "someUserName",
    password: "123",
    isLoading: true,
  },
})];

export const DarkWithLoading = Template.bind({});
DarkWithLoading.args = {};

DarkWithLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: {
    username: "someUserName",
    password: "123",
    isLoading: true,
  },
})];
