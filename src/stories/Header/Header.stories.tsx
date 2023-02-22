/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Header from "../../Atoms/Header/Header";

export default {
  title: "Atoms/Header",
  component: Header,
  children: "Label",
};

const Template = () => (
  <Header>LABEL: Label which as a default has global text styles</Header>
);
export const FlexFullWidth = Template.bind({});
