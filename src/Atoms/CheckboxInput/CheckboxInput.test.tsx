/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import CheckboxInput from "./CheckboxInput";

test(`Should render CheckboxInput Component`, () => {
  render(<CheckboxInput />);
  const checkboxInputElement = screen.getByTestId(`CheckboxInput-1`);
  expect(checkboxInputElement).toBeInTheDocument();
  expect(checkboxInputElement).not.toBeChecked();
});

test(`matches snapshot`, () => {
  const tree = TestRenderer.create(<CheckboxInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
