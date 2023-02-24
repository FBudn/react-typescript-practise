import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextLabel from "../../../Atoms/TextLabel/TextLabel";

export default {
  title: "Atoms/TextLabel",
  component: TextLabel,
} as ComponentMeta<typeof TextLabel>;

const Template: ComponentStory<typeof TextLabel> = (args) => (
  <TextLabel {...args} />
);

export const BasicRememberMe = Template.bind({});
BasicRememberMe.args = {
  children: "Remember me?",
  color: "black",
  align: "center",
  justify: "center",
  fontWeight: "bold",
  fontSize: "1rem",
  width: "100%",
  margin: "2px",
  cursor: "pointer",
};

export const BasicForgotPassword = Template.bind({});
BasicForgotPassword.args = {
  children: "Forgot Password?",
  color: "black",
  align: "center",
  justify: "center",
  fontWeight: "bold",
  fontSize: "1rem",
  width: "100%",
  margin: "2px",
  cursor: "pointer",
};

export const BasicAlreadyUser = Template.bind({});
BasicAlreadyUser.args = {
  children: "Already a user",
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
