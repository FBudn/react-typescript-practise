import React from "react";
import Button from "../../../Atoms/Button/Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const FlexFullWidth = Template.bind({});
FlexFullWidth.args = {
  children: "Press me",
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
