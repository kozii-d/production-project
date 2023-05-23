import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Code } from "./Code";

export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Code>;
const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

const code = "import React from \"react\";\n"
  + "import { ComponentStory, ComponentMeta } from \"@storybook/react\";\n"
  + "\n"
  + "import { ThemeDecorator } from \"shared/config/storybook/ThemeDecorator/ThemeDecorator\";\n"
  + "import { Theme } from \"app/providers/ThemeProvider\";\n"
  + "import { Code } from \"./Code\";\n"
  + "\n"
  + "export default {\n"
  + "  title: \"unselected/Code\",\n"
  + "  component: Code,\n"
  + "  argTypes: {\n"
  + "    backgroundColor: { control: \"color\" },\n"
  + "  },\n"
  + "} as ComponentMeta<typeof Code>;\n"
  + "\n"
  + "const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n"
  + "\n"
  + "export const Primary = Template.bind({});\n"
  + "Primary.args = {\n"
  + "\n"
  + "};\n"
  + "\n"
  + "export const Dark = Template.bind({});\n"
  + "Dark.args = {\n"
  + "};\n"
  + "Dark.decorators = [ThemeDecorator(Theme.DARK)];\n";

export const Primary = Template.bind({});
Primary.args = {
  text: code,
};

export const Dark = Template.bind({});
Dark.args = {
  text: code,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  text: code,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
