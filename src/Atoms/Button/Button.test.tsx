/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import user from "@testing-library/user-event";
import Button, { ButtonProps } from "./Button";
import "jest-styled-components";

test(`Should render Button Component`, () => {
  const onButtonClick = jest.fn();
  render(<Button onClick={onButtonClick}>Button Test</Button>);
  const ButtonElement = screen.getByTestId(`Button-1`);
  expect(ButtonElement).toBeInTheDocument();
});

test(`Should match snapshot and have styles`, () => {
  const onButtonClick = jest.fn();
  const tree = TestRenderer.create(
    <Button onClick={onButtonClick}>Button Test</Button>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("justify-content", "center");
  expect(tree).toHaveStyleRule("align-items", "center");
  expect(tree).toHaveStyleRule("width", "100%");
  expect(tree).toHaveStyleRule("height", "40px");
  expect(tree).toHaveStyleRule("border", "none");
  expect(tree).toHaveStyleRule("border-radius", "5px");
  expect(tree).toHaveStyleRule("color", "white");
  expect(tree).toHaveStyleRule("cursor", "pointer");
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
