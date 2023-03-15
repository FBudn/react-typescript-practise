import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Button, { ButtonProps } from "./Button";
import "jest-styled-components";

const mockOnButtonClick = jest.fn();
const props: ButtonProps = {
  onClick: mockOnButtonClick,
  testId: `test-button-id`,
  children: `Button Test`,
};
// tekst osobny test zrobić
test(`Should render Button Component`, () => {
  render(<Button {...props} />);
  const ButtonElement = screen.getByTestId(`test-button-id`);
  expect(ButtonElement).toBeInTheDocument();
});

test(`Should match snapshot`, () => {
  const ButtonElement = TestRenderer.create(<Button {...props} />).toJSON();
  expect(ButtonElement).toMatchSnapshot();
});

test(`Should have styles and render`, () => {
  render(<Button {...props} />);
  const ButtonElement = screen.getByTestId(`test-button-id`);
  expect(ButtonElement).toBeInTheDocument();
  expect(ButtonElement).toHaveStyle({
    display: "flex",
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    border: "none",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
  });
});

test(`Should render with text`, () => {
  render(<Button {...props} />);
  const ButtonElement = screen.getByTestId(`test-button-id`);
  expect(ButtonElement).toBeInTheDocument();
  expect(ButtonElement).toHaveTextContent(`Button Test`);
});

test(`Should render button and handle onClick`, () => {
  render(<Button {...props} />);
  const ButtonElement = screen.getByTestId(`test-button-id`);
  expect(ButtonElement).toBeInTheDocument();
  expect(mockOnButtonClick).toBeCalledTimes(0);
  fireEvent.click(ButtonElement);
  expect(mockOnButtonClick).toBeCalledTimes(1);
  mockOnButtonClick(`Button Test 1`);
  expect(mockOnButtonClick).toBeCalledWith(`Button Test 1`);
});
