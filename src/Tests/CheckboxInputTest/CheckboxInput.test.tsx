/* eslint-disable react/react-in-jsx-scope */
import { cleanup, render, screen } from "@testing-library/react";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";

afterEach(() => {
  cleanup();
});

test(`Should render CheckboxInput Component`, () => {
  render(<CheckboxInput />);
  const checkboxInputElement = screen.getByTestId(`CheckboxInput-1`);
  expect(checkboxInputElement).toBeInTheDocument();
});
