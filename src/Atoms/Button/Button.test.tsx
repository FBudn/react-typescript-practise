/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import user from "@testing-library/user-event";
import Button, { ButtonProps } from "./Button";
import "jest-styled-components";

test(`Should render Button Component`, () => {
  const mockOnButtonClick = jest.fn();
  render(<Button onClick={mockOnButtonClick}>Button Test</Button>);
  const ButtonElement = screen.getByTestId(`Button-1`);
  expect(ButtonElement).toBeInTheDocument();
});

test(`Should match snapshot and have styles`, () => {
  const mockOnButtonClick = jest.fn();
  const ButtonElement = TestRenderer.create(
    <Button onClick={mockOnButtonClick}>Button Test</Button>,
  ).toJSON();
  expect(ButtonElement).toMatchSnapshot();
  expect(ButtonElement).toHaveStyleRule("display", "flex");
  expect(ButtonElement).toHaveStyleRule("justify-content", "center");
  expect(ButtonElement).toHaveStyleRule("align-items", "center");
  expect(ButtonElement).toHaveStyleRule("width", "100%");
  expect(ButtonElement).toHaveStyleRule("height", "40px");
  expect(ButtonElement).toHaveStyleRule("border", "none");
  expect(ButtonElement).toHaveStyleRule("border-radius", "5px");
  expect(ButtonElement).toHaveStyleRule("color", "white");
  expect(ButtonElement).toHaveStyleRule("cursor", "pointer");
});

test(`handler is called`, () => {
  const mockOnClick = jest.fn<ButtonProps["onClick"], [onClick: any]>();

  render(<Button onClick={mockOnClick}>Button Test</Button>);
  const consoleLogButton = screen.getByTestId(`Button-1`);
  user.click(consoleLogButton);
  expect(mockOnClick).toBeCalledTimes(1);
  mockOnClick(`Button Test 1`);
  expect(mockOnClick).toBeCalledWith(`Button Test 1`);
});
