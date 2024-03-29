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
  testId: `test-textLabel-id`,
  children: `TextLabel Test`,
};

test(`Should render TextLabel component`, () => {
  render(<TextLabel {...props} />);
  const TextLabelElement = screen.getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeInTheDocument();
});

test(`Should match snapshot`, () => {
  const TextLabelElement = TestRenderer.create(
    <TextLabel {...props} />,
  ).toJSON();
  expect(TextLabelElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<TextLabel {...props} />);
  const TextLabelElement = screen.getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeInTheDocument();

  expect(TextLabelElement).toHaveStyle({
    display: "flex",
    border: "none",
  });
});

test(`Should render with text`, () => {
  render(<TextLabel {...props} />);
  const TextLabelElement = screen.getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeInTheDocument();
  expect(TextLabelElement).toHaveTextContent(`TextLabel Test`);
});
