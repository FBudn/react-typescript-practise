/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { any, string } from "prop-types";
import Icon from "../../Atoms/Icon/Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    onClickIcon: { action: "Console.log: `My name Clicked` " },
    color: string,
    children: any,
  },
};
const facebook = <FontAwesomeIcon icon={faFacebookF} />;

const Template = (args: any) => <Icon {...args}>{facebook}</Icon>;

export const BasicIcon = Template.bind({});
