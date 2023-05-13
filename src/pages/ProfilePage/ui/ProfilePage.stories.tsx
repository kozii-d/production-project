import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AvatarImg from "shared/assets/tests/Avatar.png";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import ProfilePage from "./ProfilePage";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      avatar: AvatarImg,
      first: "John",
      lastname: "Doe",
      age: 25,
      city: "Berlin",
      username: "johndoe",
      currency: Currency.EUR,
      country: Country.Germany,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      avatar: AvatarImg,
      first: "John",
      lastname: "Doe",
      age: 25,
      city: "Berlin",
      username: "johndoe",
      currency: Currency.EUR,
      country: Country.Germany,
    },
  },
})];
