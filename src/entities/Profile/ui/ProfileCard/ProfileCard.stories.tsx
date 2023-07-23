import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import AvatarImg from "shared/assets/tests/Avatar.png";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

import { ProfileCard } from "./ProfileCard";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    avatar: AvatarImg,
    first: "John",
    lastname: "Doe",
    age: 25,
    city: "Berlin",
    username: "johndoe",
    currency: Currency.EUR,
    country: Country.Germany,
  },
};
Primary.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: "Error message",
};
Error.decorators = [StoreDecorator({})];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readonly: true,
  data: {
    avatar: AvatarImg,
    first: "John",
    lastname: "Doe",
    age: 25,
    city: "Berlin",
    username: "johndoe",
    currency: Currency.EUR,
    country: Country.Germany,
  },
};

export const Editable = Template.bind({});
Editable.args = {
  readonly: false,
  data: {
    avatar: AvatarImg,
    first: "John",
    lastname: "Doe",
    age: 25,
    city: "Berlin",
    username: "johndoe",
    currency: Currency.EUR,
    country: Country.Germany,
  },
};
