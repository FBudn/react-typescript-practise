/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";

export default {
  title: "Atoms/CheckboxInput",
  component: CheckboxInput,
};

const Template = (args) => <CheckboxInput {...args} />;

export const StyledChecbox = Template.bind({});
StyledChecbox.args = {
  id: 1,
  useRef,
  onChange: `Forwarding reference`,
};
