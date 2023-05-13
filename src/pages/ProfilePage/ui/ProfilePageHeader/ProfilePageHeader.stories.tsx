import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ProfilePageHeader } from "./ProfilePageHeader";

export default {
  title: "pages/ProfilePage/ProfilePageHeader",
  component: ProfilePageHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePageHeader>;

const Template: ComponentStory<typeof ProfilePageHeader> = (args) => <ProfilePageHeader {...args} />;

export const ReadOnly = Template.bind({});
ReadOnly.args = {};
ReadOnly.decorators = [StoreDecorator({ profile: { readonly: true } })];

export const Editable = Template.bind({});
Editable.args = {};
Editable.decorators = [StoreDecorator({ profile: { readonly: false } })];

export const ReadOnlyDark = Template.bind({});
ReadOnlyDark.args = {};
ReadOnlyDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { readonly: true } })];

export const EditableDark = Template.bind({});
EditableDark.args = {};
EditableDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { readonly: false } })];
