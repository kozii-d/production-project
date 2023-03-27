import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
  title: "Title",
  text: "This is some text.",
};

export const WithTitleAndTextDark = Template.bind({});
WithTitleAndTextDark.args = {
  title: "Title",
  text: "This is some text.",
};
WithTitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithTextOnly = Template.bind({});
WithTextOnly.args = {
  text: "This is some text.",
};

export const WithTextOnlyDark = Template.bind({});
WithTextOnlyDark.args = {
  text: "This is some text.",
};
WithTextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithTitleOnly = Template.bind({});
WithTitleOnly.args = {
  title: "Title",
};

export const WithTitleOnlyDark = Template.bind({});
WithTitleOnlyDark.args = {
  title: "Title",
};
WithTitleOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithErrorTheme = Template.bind({});
WithErrorTheme.args = {
  title: "Error Title",
  text: "This is an error message.",
  theme: TextTheme.ERROR,
};

export const WithErrorThemeDark = Template.bind({});
WithErrorThemeDark.args = {
  title: "Error Title",
  text: "This is an error message.",
  theme: TextTheme.ERROR,
};
WithErrorThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
