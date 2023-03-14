import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconsSection from "./IconsSection";

export default {
  title: "Molecules/IconsSection",
  component: IconsSection,
  argTypes: { onClickIcon: { action: "Icons name" } },
} as ComponentMeta<typeof IconsSection>;

const Template: ComponentStory<typeof IconsSection> = (args) => (
  <IconsSection {...args} />
);

export const Basic = Template.bind({});
