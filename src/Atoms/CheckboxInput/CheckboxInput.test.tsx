/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import CheckboxInput, { CheckboxInputProps } from "./CheckboxInput";
import "jest-styled-components";

const props: CheckboxInputProps = {
  testId: `test-checkbox-id`,
  id: `id`,
};

test(`Should render CheckboxInput Component with not checked checkbox`, () => {
  render(<CheckboxInput {...props} />);
  const checkboxInputElement = screen.getByTestId(`test-checkbox-id`);
  expect(checkboxInputElement).toBeInTheDocument();
  expect(checkboxInputElement).not.toBeChecked();
});

test(`Should match snapshot`, () => {
  const checkboxInputElement = TestRenderer.create(
    <CheckboxInput {...props} />,
  ).toJSON();
  expect(checkboxInputElement).toMatchSnapshot();
});

test(`Should have styles`, () => {
  render(<CheckboxInput {...props} />);
  const checkboxInputElement = screen.getByTestId(`test-checkbox-id`);
  expect(checkboxInputElement).toBeInTheDocument();

  expect(checkboxInputElement).toHaveStyleRule("max-width", "35px");
  expect(checkboxInputElement).toHaveStyleRule("min-width", "20px");
  expect(checkboxInputElement).toHaveStyleRule("max-height", "35px");
  expect(checkboxInputElement).toHaveStyleRule("min-height", "20px");
  expect(checkboxInputElement).toHaveStyleRule("cursor", "pointer");
});
