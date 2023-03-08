/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from "react";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Input, { InputProps } from "./Input";
import "jest-styled-components";

const props: InputProps = {
  type: `text`,
  testId: `test-input-id`,
};

test(`Should render Input component`, () => {
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`);
  expect(InputElement).toBeInTheDocument();
});
test(`Should store input value`, () => {
  // const mockInputRef = jest.fn();
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`) as HTMLInputElement;
  InputElement.value = "Test";
  expect(InputElement).toHaveValue("Test");
  // userEvent.type(InputElement, "Test");

  // InputElement.onchange = mockInputRef;
  // expect(mockInputRef).toBeCalledTimes(4);

  /* InputElement.value = "test";
  expect(screen.getByDisplayValue("test")).toHaveAttribute(
    "data-testid",
    "InputField-1",
  ); */
});
test(`Should match snapshot`, () => {
  const InputElement = TestRenderer.create(<Input {...props} />).toJSON();
  expect(InputElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`);
  expect(InputElement).toBeInTheDocument();

  expect(InputElement).toHaveStyle({
    display: "flex",
    width: "100%",
    borderRadius: "5px",
    height: "40px",
  });
});
