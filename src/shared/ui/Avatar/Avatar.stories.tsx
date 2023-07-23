import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";
import AvatarImg from "./Avatar.png";

export default {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: AvatarImg,
  alt: "Avatar",
};
export const WithCustomSize = Template.bind({});
WithCustomSize.args = {
  src: AvatarImg,
  alt: "Avatar",
  size: 150,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  alt: "Avatar",
};
