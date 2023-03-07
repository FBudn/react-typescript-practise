/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import CheckboxInput from "./CheckboxInput";
import "jest-styled-components";

test(`Should render CheckboxInput Component`, () => {
  render(<CheckboxInput />);
  const checkboxInputElement = screen.getByTestId(`CheckboxInput-1`);
  expect(checkboxInputElement).toBeInTheDocument();
  expect(checkboxInputElement).not.toBeChecked();
});

test(`Should match snapshot and have styles`, () => {
  const checkboxInputElement = TestRenderer.create(<CheckboxInput />).toJSON();
  expect(checkboxInputElement).toMatchSnapshot();
  expect(checkboxInputElement).toHaveStyleRule("max-width", "35px");
  expect(checkboxInputElement).toHaveStyleRule("min-width", "20px");
  expect(checkboxInputElement).toHaveStyleRule("max-height", "35px");
  expect(checkboxInputElement).toHaveStyleRule("min-height", "20px");
  expect(checkboxInputElement).toHaveStyleRule("cursor", "pointer");
});
