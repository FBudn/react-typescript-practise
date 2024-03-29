/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import InputAndLabel, { InputAndLabelProps } from "./InputAndLabel";
import "jest-styled-components";

const props: InputAndLabelProps = {
  testId: `test-inputAndLabel-id`,
  children: `InputAndLabel Test`,
  type: `text`,
};

test(`Should render InputAndLabel component`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const InputAndLabelElement = TestRenderer.create(
    <InputAndLabel {...props} />,
  ).toJSON;
  expect(InputAndLabelElement).toMatchSnapshot();
});

test(`Should render and have styles`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeInTheDocument();

  expect(InputAndLabelElement).toHaveStyle({
    display: "flex",
    flexDirection: "column",
    gap: "1px",
    width: "100%",
  });
});

test(`Should render with text`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeInTheDocument();
  const TextLabelElement =
    within(InputAndLabelElement).getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeInTheDocument();
  expect(TextLabelElement).toHaveTextContent(`InputAndLabel Test`);
});

test(`Should redner input element`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeInTheDocument();
  const InputElement =
    within(InputAndLabelElement).getByTestId(`test-input-id`);
  expect(InputElement).toBeInTheDocument();
});

test(`Should store input value`, () => {
  render(<InputAndLabel {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`) as HTMLInputElement;
  InputElement.value = "Test";
  expect(InputElement).toHaveValue("Test");
});
