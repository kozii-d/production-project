import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text } from "shared/ui/Text/Text";

import { Theme } from "app/providers/ThemeProvider";

import { Card } from "./Card";

export default {
  title: "shared/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Text title="test" text="test text" />,
};

export const Dark = Template.bind({});
Dark.args = {
  children: <Text title="test" text="test text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  children: <Text title="test" text="test text" />,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
