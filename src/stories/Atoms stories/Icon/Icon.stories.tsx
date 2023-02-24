import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { string } from "prop-types";
import Icon from "../../../Atoms/Icon/Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    onClickIcon: { action: "Console.log: `My name Clicked` " },
    color: string,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "transparent", width: "30px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const BasicIcon = Template.bind({});
BasicIcon.args = {
  children: <FontAwesomeIcon icon={faFacebookF} />,
};

// enum przetrenować
