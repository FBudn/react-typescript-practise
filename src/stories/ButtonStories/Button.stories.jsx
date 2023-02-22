import React from "react";
import Button from "../../Atoms/Button/Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "console.log: email, password, is checkbox checked" },
  },
};

const Template = (args) => <Button {...args}> {args.children}</Button>;

export const FlexFullWidth = Template.bind({});
FlexFullWidth.args = {
  children: "Press me",
};
// export const Flex100percentwidth = () => <Button>1</Button>;
export const FlexWidth20 = Template.bind({});
FlexWidth20.args = {
  children: "I'm for testing",
  storybookTesting: { backgroundColor: "green", width: "50%" },
};
