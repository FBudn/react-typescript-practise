import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Icon, { IconProps } from "./Icon";
import "jest-styled-components";

const mockOnClickIcon = jest.fn();

const props1: IconProps = {
  testId: `test-icon1-id`,
  color: `blue`,
  icon: `facebook`,
  onClickIcon: mockOnClickIcon,
};
const props2: IconProps = {
  testId: `test-icon2-id`,
  color: `red`,
  icon: `google`,
  onClickIcon: mockOnClickIcon,
};
const props3: IconProps = {
  testId: `test-icon3-id`,
  color: `blue`,
  icon: `linkedin`,
  onClickIcon: mockOnClickIcon,
};

test(`Should render Icon component`, () => {
  render(<Icon {...props1} />);
  render(<Icon {...props2} />);
  render(<Icon {...props3} />);
  const IconElement1 = screen.getByTestId(`test-icon1-id`);
  const IconElement2 = screen.getByTestId(`test-icon2-id`);
  const IconElement3 = screen.getByTestId(`test-icon3-id`);
  expect(IconElement1).toBeInTheDocument();
  expect(IconElement2).toBeInTheDocument();
  expect(IconElement3).toBeInTheDocument();
});

test(`Should match snapshot test-icon1-id:`, () => {
  const IconElement1 = TestRenderer.create(<Icon {...props1} />).toJSON();
  expect(IconElement1).toMatchSnapshot();
});

test(`Should match snapshot test-icon2-id:`, () => {
  const IconElement2 = TestRenderer.create(<Icon {...props2} />).toJSON();
  expect(IconElement2).toMatchSnapshot();
});

test(`Should match snapshot test-icon3-id:`, () => {
  const IconElement3 = TestRenderer.create(<Icon {...props3} />).toJSON();
  expect(IconElement3).toMatchSnapshot();
});

test(`Should render and have styles test-icon1-id:`, () => {
  render(<Icon {...props1} />);
  const IconElement1 = screen.getByTestId(`test-icon1-id`);

  expect(IconElement1).toHaveStyleRule("display", "flex");
  expect(IconElement1).toHaveStyleRule("width", "25px");
  expect(IconElement1).toHaveStyleRule("height", "25px");
  expect(IconElement1).toHaveStyleRule("justify-content", "center");
  expect(IconElement1).toHaveStyleRule("align-items", "center");
  expect(IconElement1).toHaveStyleRule("padding", "8px");
  expect(IconElement1).toHaveStyleRule("font-size", "1rem");
  expect(IconElement1).toHaveStyleRule("border-radius", "100%");
  expect(IconElement1).toHaveStyleRule("cursor", "pointer");
});

test(`Should render and have styles test-icon2-id:`, () => {
  render(<Icon {...props2} />);
  const IconElement2 = screen.getByTestId(`test-icon2-id`);

  expect(IconElement2).toHaveStyleRule("display", "flex");
  expect(IconElement2).toHaveStyleRule("width", "25px");
  expect(IconElement2).toHaveStyleRule("height", "25px");
  expect(IconElement2).toHaveStyleRule("justify-content", "center");
  expect(IconElement2).toHaveStyleRule("align-items", "center");
  expect(IconElement2).toHaveStyleRule("padding", "8px");
  expect(IconElement2).toHaveStyleRule("font-size", "1rem");
  expect(IconElement2).toHaveStyleRule("border-radius", "100%");
  expect(IconElement2).toHaveStyleRule("cursor", "pointer");
});

test(`Should render and have styles test-icon3-id:`, () => {
  render(<Icon {...props3} />);
  const IconElement3 = screen.getByTestId(`test-icon3-id`);

  expect(IconElement3).toHaveStyleRule("display", "flex");
  expect(IconElement3).toHaveStyleRule("width", "25px");
  expect(IconElement3).toHaveStyleRule("height", "25px");
  expect(IconElement3).toHaveStyleRule("justify-content", "center");
  expect(IconElement3).toHaveStyleRule("align-items", "center");
  expect(IconElement3).toHaveStyleRule("padding", "8px");
  expect(IconElement3).toHaveStyleRule("font-size", "1rem");
  expect(IconElement3).toHaveStyleRule("border-radius", "100%");
  expect(IconElement3).toHaveStyleRule("cursor", "pointer");
});

test(`should handle onClicks test-icon1-id`, () => {
  render(<Icon {...props1} />);
  const consoleLogIcon1 = screen.getByTestId(`test-icon1-id`);
  fireEvent.click(consoleLogIcon1);
  expect(mockOnClickIcon).toBeCalledTimes(1);
  mockOnClickIcon(`Icon Test 1`);
  expect(mockOnClickIcon).toBeCalledWith(`Icon Test 1`);
});

test(`should handle onClicks test-icon2-id`, () => {
  render(<Icon {...props2} />);
  const consoleLogIcon2 = screen.getByTestId(`test-icon2-id`);
  fireEvent.click(consoleLogIcon2);
  expect(mockOnClickIcon).toBeCalledTimes(1);
  mockOnClickIcon(`Icon Test 2`);
  expect(mockOnClickIcon).toBeCalledWith(`Icon Test 2`);
});

test(`should handle onClicks test-icon3-id`, () => {
  render(<Icon {...props3} />);
  const consoleLogIcon3 = screen.getByTestId(`test-icon3-id`);
  fireEvent.click(consoleLogIcon3);
  expect(mockOnClickIcon).toBeCalledTimes(1);
  mockOnClickIcon(`Icon Test 3`);
  expect(mockOnClickIcon).toBeCalledWith(`Icon Test 3`);
});
