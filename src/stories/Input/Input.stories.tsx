/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import Input from "../../Atoms/Input/Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    useRef: useRef,
    type: "text",
  },
};

const Template = (args) => <Input {...args} />;

export const TextInputBasic = Template.bind({});
TextInputBasic.args = {
  onClick: "jestem",
};
