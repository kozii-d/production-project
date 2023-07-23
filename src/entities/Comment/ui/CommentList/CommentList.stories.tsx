import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/ThemeProvider";

import { CommentList } from "./CommentList";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments = [
  {
    id: "1",
    text: "Some comment text",
    user: {
      id: "1",
      username: "Some username",
    },
  },
  {
    id: "2",
    text: "Some comment text 2",
    user: {
      id: "2",
      username: "Some username 2",
    },
  },
];

export const Primary = Template.bind({});
Primary.args = {
  comments,
};

export const PrimaryIsLoading = Template.bind({});
PrimaryIsLoading.args = {
  isLoading: true,
  comments: [],
};

export const Dark = Template.bind({});
Dark.args = {
  comments,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
  isLoading: true,
  comments: [],
};
DarkIsLoading.decorators = [ThemeDecorator(Theme.DARK)];
