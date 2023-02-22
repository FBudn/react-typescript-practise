import React from "react";
import CheckboxInput from "../../../Atoms/CheckboxInput/CheckboxInput";

export default {
  title: "Atoms/CheckboxInput",
  component: CheckboxInput,
  argTypes: { ref: { action: "I'm forwarding a reference" } },
};

const Template = (args) => <CheckboxInput {...args} />;

export const StyledChecbox = Template.bind({});
StyledChecbox.args = {
  id: 1,
  onChange: `Forwarding reference`,
};
