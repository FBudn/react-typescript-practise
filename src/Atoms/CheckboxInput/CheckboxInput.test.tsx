/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import CheckboxInput from "./CheckboxInput";

test(`Should render CheckboxInput Component`, () => {
  render(<CheckboxInput />);
  const checkboxInputElement = screen.getByTestId(`CheckboxInput-1`);
  expect(checkboxInputElement).toBeInTheDocument();
});
