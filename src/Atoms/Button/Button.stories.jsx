import React from "react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const FlexFullWidthLOGIN = Template.bind({});
FlexFullWidthLOGIN.args = {
  children: "LOGIN",
};

export const FlexFullWidthSIGNUP = Template.bind({});
FlexFullWidthSIGNUP.args = {
  children: "SIGN UP",
};
