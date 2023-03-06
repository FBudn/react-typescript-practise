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
  const tree = TestRenderer.create(<CheckboxInput />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("max-width", "35px");
  expect(tree).toHaveStyleRule("min-width", "20px");
  expect(tree).toHaveStyleRule("max-height", "35px");
  expect(tree).toHaveStyleRule("min-height", "20px");
  expect(tree).toHaveStyleRule("cursor", "pointer");
});
