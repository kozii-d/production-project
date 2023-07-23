import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/ThemeProvider";

import { Navbar } from "./Navbar";

export default {
  title: "widget/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LightLogOut = Template.bind({});
LightLogOut.args = {
};

export const DarkLogOut = Template.bind({});
DarkLogOut.args = {
};
DarkLogOut.decorators = [ThemeDecorator(Theme.DARK)];

export const LightLogIn = Template.bind({});
LightLogIn.args = {
};
LightLogIn.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      username: "someUsername",
      id: "1",
    },
  },
})];

export const DarkLogIn = Template.bind({});
DarkLogIn.args = {
};
DarkLogIn.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      username: "someUsername",
      id: "1",
    },
  },
})];
