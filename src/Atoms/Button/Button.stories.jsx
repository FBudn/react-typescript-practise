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

/*

export const FlexStyleTesting = Template.bind({});
FlexStyleTesting.args = {
  children: "I'm for testing",
  storybookTesting: { backgroundColor: "green", width: "50%" },
};
*/
/*
Stories trzymam przy komponentach po prostu
decorator pod konkretny template ogarnąć czy się da i zrobić 

*/
