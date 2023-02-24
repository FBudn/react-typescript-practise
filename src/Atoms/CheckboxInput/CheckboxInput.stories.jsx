import React from "react";
import CheckboxInput from "./CheckboxInput";

export default {
  title: "Atoms/CheckboxInput",
  component: CheckboxInput,
  argTypes: { ref: { action: "I'm forwarding a reference" } },
};

const Template = (args) => <CheckboxInput {...args} />;

export const StyledChecbox = Template.bind({});
StyledChecbox.args = {
  id: 1,
};
