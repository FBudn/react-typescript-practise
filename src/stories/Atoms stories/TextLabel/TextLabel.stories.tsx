import React from "react";
import { Meta, Story } from "@storybook/react";
import TextLabel, { TextLabelProps } from "../../../Atoms/TextLabel/TextLabel";

export default {
  title: "Atoms/TextLabel",
  component: TextLabel,
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

/* 
import React from "react";
import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from "../../../Atoms/Input/Input";
import TextLabel, { TextLabelProps } from "../../../Atoms/TextLabel/TextLabel";

export default {
  title: "Molecules/InputAndLabel",
  component: Input,
  type: "Text",
} as Meta;

const Template: Story<InputProps, TextLabelProps> = (args) => (
  <>
    <TextLabel
      color="black"
      align="center"
      justify="center"
      fontWeight="bold"
      fontSize="2xl"
    >
      {args.children}
    </TextLabel>
    <Input type={args.type} />
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  children: "Email",
};

*/
