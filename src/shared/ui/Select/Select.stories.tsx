import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/ThemeProvider";

import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Select",
  options: [
    { value: "option1", content: "Option 1" },
    { value: "option2", content: "Option 2" },
    { value: "option3", content: "Option 3" },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  label: "Select",
  options: [
    { value: "option1", content: "Option 1" },
    { value: "option2", content: "Option 2" },
    { value: "option3", content: "Option 3" },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  label: "Select",
  value: "option2",
  options: [
    { value: "option1", content: "Option 1" },
    { value: "option2", content: "Option 2" },
    { value: "option3", content: "Option 3" },
  ],
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: [
    { value: "option1", content: "Option 1" },
    { value: "option2", content: "Option 2" },
    { value: "option3", content: "Option 3" },
  ],
};
