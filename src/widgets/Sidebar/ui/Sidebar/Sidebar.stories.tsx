import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Sidebar } from "./Sidebar";

export default {
  title: "widget/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [StoreDecorator({ user: { authData: {} } }), ThemeDecorator(Theme.DARK)];

export const NoAuth = Template.bind({});
NoAuth.args = {
};
NoAuth.decorators = [StoreDecorator({ user: {} })];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {
};
NoAuthDark.decorators = [StoreDecorator({ user: {} }), ThemeDecorator(Theme.DARK)];
