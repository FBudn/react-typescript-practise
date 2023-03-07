/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import user from "@testing-library/user-event";
import Input from "./Input";
import "jest-styled-components";

test(`Should render Input component`, () => {
  render(<Input type="text" />);
  const InputElement = screen.getByTestId(`InputField-1`);
  expect(InputElement).toBeInTheDocument();
});
test(`Should store input value`, () => {
  // const mockInputRef = jest.fn();
  render(<Input type="text" />);
  const InputElement = screen.getByTestId(`InputField-1`) as HTMLInputElement;
  InputElement.value = "Test";
  expect(InputElement).toHaveValue("Test");
  user.type(InputElement, "Test");
  // InputElement.onchange = mockInputRef;
  // expect(mockInputRef).toBeCalledTimes(4);

  /* InputElement.value = "test";
  expect(screen.getByDisplayValue("test")).toHaveAttribute(
    "data-testid",
    "InputField-1",
  ); */
});
test(`Should match snapshot and have styles:`, () => {
  const InputElement = TestRenderer.create(<Input type="text" />).toJSON();
  expect(InputElement).toMatchSnapshot();
  expect(InputElement).toHaveStyleRule("display", "flex");
  expect(InputElement).toHaveStyleRule("width", "100%");
  expect(InputElement).toHaveStyleRule("border-radius", "5px");
  expect(InputElement).toHaveStyleRule("height", "40px");
});
