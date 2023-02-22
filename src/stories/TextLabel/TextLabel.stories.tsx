import React from "react";
import { Meta, Story } from "@storybook/react";
import TextLabel, { TextLabelProps } from "../../Atoms/TextLabel/TextLabel";

export default {
  title: "Atoms/TextLabel",
  component: TextLabel,
  argTypes: {
    onClickLink: { action: "Im switching page" },
  },
} as Meta;

const Template: Story<TextLabelProps> = (args) => (
  <TextLabel {...args}>{args.children}</TextLabel>
);

export const Basic = Template.bind({});
Basic.args = {
  children: "Text label",
  color: "black",
  align: "center",
  justify: "center",
  fontWeight: "bold",
  fontSize: "1rem",
  width: "100%",
  margin: "2px",
  cursor: "pointer",
};
