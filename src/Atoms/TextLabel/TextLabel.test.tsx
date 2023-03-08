import React from "react";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import TextLabel, { TextLabelProps } from "./TextLabel";
import "jest-styled-components";

const props: TextLabelProps = {
  color: "black",
  align: "center",
  justify: "center",
  fontSize: "1rem",
  fontWeight: "500",
  testId: `test-TextLabel-id`,
  children: `TextLabel Test`,
};

test(`Should render TextLabel component`, () => {
  render(<TextLabel {...props} />);
  const TextLabelElement = screen.getByTestId(`test-TextLabel-id`);
  expect(TextLabelElement).toBeInTheDocument();
});

test(`Should match snapshot and havestyles:`, () => {
  const TextLabelElement = TestRenderer.create(
    <TextLabel {...props} />,
  ).toJSON();
  expect(TextLabelElement).toMatchSnapshot();
  expect(TextLabelElement).toHaveStyleRule("display", "flex");
  expect(TextLabelElement).toHaveStyleRule("border", "none");
});

test(`Should render and have styles:`, () => {
  render(<TextLabel {...props} />);
  const TextLabelElement = screen.getByTestId(`test-TextLabel-id`);
  expect(TextLabelElement).toBeInTheDocument();

  expect(TextLabelElement).toHaveStyle({
    display: "flex",
    border: "none",
  });
});
