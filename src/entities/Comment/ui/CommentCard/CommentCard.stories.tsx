import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/ThemeProvider";

import { CommentCard } from "./CommentCard";

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const comment = {
  id: "1",
  text: "Some comment text",
  user: {
    id: "1",
    username: "Some username",
  },
};

export const Primary = Template.bind({});
Primary.args = {
  comment,
};

export const Dark = Template.bind({});
Dark.args = {
  comment,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryIsLoading = Template.bind({});
PrimaryIsLoading.args = {
  isLoading: true,
};

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
  isLoading: true,
};
DarkIsLoading.decorators = [ThemeDecorator(Theme.DARK)];
