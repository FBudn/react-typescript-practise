import React from "react";
import { render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import CheckboxAndLabel, { CheckboxAndLabelProps } from "./CheckboxAndLabel";
import "jest-styled-components";

const props: CheckboxAndLabelProps = {
  infoText: `CheckboxAndLabel Test`,
  testId: `checkboxAndLabel-test-id`,
};

test(`Should render CheckboxAndLabel component`, () => {
  render(<CheckboxAndLabel {...props} />);
  const ChecboxAndLabelElement = screen.getByTestId(`checkboxAndLabel-test-id`);
  expect(ChecboxAndLabelElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const CheckboxAndLabelElement = TestRenderer.create(
    <CheckboxAndLabel {...props} />,
  ).toJSON;
  expect(CheckboxAndLabelElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<CheckboxAndLabel {...props} />);
  const ChecboxAndLabelElement = screen.getByTestId(`checkboxAndLabel-test-id`);
  expect(ChecboxAndLabelElement).toBeInTheDocument();

  expect(ChecboxAndLabelElement).toHaveStyle({
    display: "flex",
    width: "100%",
    justifyContent: "start",
    alignItems: "center",
    // text: "center",
    gap: "3px",
    height: "10px",
    cursor: "pointer",
    margin: "5px 0px 5px 0px",
  });
});

test(`Should render with text`, () => {
  render(<CheckboxAndLabel {...props} />);
  const { getByText } = within(screen.getByTestId(`checkboxAndLabel-test-id`));
  expect(getByText("CheckboxAndLabel Test")).toBeInTheDocument();
});

test(`CheckboxInput should not be checked`, () => {
  render(<CheckboxAndLabel {...props} />);
  const ChecboxAndLabelElem = screen.getByTestId(`checkboxAndLabel-test-id`);
  expect(ChecboxAndLabelElem).toBeInTheDocument();
  const CheckboxInput =
    within(ChecboxAndLabelElem).getByTestId(`test-checkbox-id`);
  expect(CheckboxInput).toBeInTheDocument();
  expect(CheckboxInput).not.toBeChecked();
});
