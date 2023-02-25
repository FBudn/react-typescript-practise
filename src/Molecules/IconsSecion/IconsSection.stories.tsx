import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconsSection from "./IconsSection";

export default {
  title: "Molecules/IconsSection",
  component: IconsSection,
  firstIconText: 1,
  secondIconText: 2,
  thirdIconText: 3,
  argTypes: { onClickIcon: { action: "Icons name" } },
} as ComponentMeta<typeof IconsSection>;

const Template: ComponentStory<typeof IconsSection> = (args) => (
  <IconsSection {...args} />
);

export const Basic = Template.bind({});

/*
children: {facebook: <FontAwesomeIcon icon={faFacebookF} />,
  google: <FontAwesomeIcon icon={faGoogle} />,
  linkedin: <FontAwesomeIcon icon={faLinkedinIn} />, }/>,

  <FontAwesomeIcon icon={faFacebookF} />,
    <FontAwesomeIcon icon={faGoogle} />,
    <FontAwesomeIcon icon={faLinkedinIn} />,
    [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`],
    import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
*/
