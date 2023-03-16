import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Icon from "./Icon";
import "jest-styled-components";

const mockOnClickIcon = jest.fn();

test(`Should render Icon component`, () => {
  render(<Icon onClickIcon={mockOnClickIcon} color="red" icon="facebook" />);
  render(<Icon onClickIcon={mockOnClickIcon} color="blue" icon="google" />);
  render(<Icon onClickIcon={mockOnClickIcon} color="blue" icon="linkedin" />);
  const IconElement1 = screen.getByTestId(`Icon-1-case`);
  const IconElement2 = screen.getByTestId(`Icon-2-case`);
  const IconElement3 = screen.getByTestId(`Icon-3-case`);
  expect(IconElement1).toBeInTheDocument();
  expect(IconElement2).toBeInTheDocument();
  expect(IconElement3).toBeInTheDocument();
});

test(`Should match snapshot and have styles:`, () => {
  const IconElement1 = TestRenderer.create(
    <Icon onClickIcon={mockOnClickIcon} color="red" icon="facebook" />,
  ).toJSON();
  const IconElement2 = TestRenderer.create(
    <Icon onClickIcon={mockOnClickIcon} color="blue" icon="google" />,
  ).toJSON();
  const IconElement3 = TestRenderer.create(
    <Icon onClickIcon={mockOnClickIcon} color="blue" icon="linkedin" />,
  ).toJSON();

  expect(IconElement1).toMatchSnapshot();
  expect(IconElement2).toMatchSnapshot();
  expect(IconElement3).toMatchSnapshot();
});

test(`Should render have styles:`, () => {
  const IconElement1 = TestRenderer.create(
    <Icon onClickIcon={mockOnClickIcon} color="red" icon="facebook" />,
  ).toJSON();
  const IconElement2 = TestRenderer.create(
    <Icon onClickIcon={mockOnClickIcon} color="blue" icon="google" />,
  ).toJSON();
  const IconElement3 = TestRenderer.create(
    <Icon onClickIcon={mockOnClickIcon} color="blue" icon="linkedin" />,
  ).toJSON();

  expect(IconElement1).toHaveStyleRule("display", "flex");
  expect(IconElement1).toHaveStyleRule("width", "25px");
  expect(IconElement1).toHaveStyleRule("height", "25px");
  expect(IconElement1).toHaveStyleRule("justify-content", "center");
  expect(IconElement1).toHaveStyleRule("align-items", "center");
  expect(IconElement1).toHaveStyleRule("padding", "8px");
  expect(IconElement1).toHaveStyleRule("font-size", "1rem");
  expect(IconElement1).toHaveStyleRule("border-radius", "100%");
  expect(IconElement1).toHaveStyleRule("cursor", "pointer");
  expect(IconElement2).toHaveStyleRule("display", "flex");
  expect(IconElement2).toHaveStyleRule("width", "25px");
  expect(IconElement2).toHaveStyleRule("height", "25px");
  expect(IconElement2).toHaveStyleRule("justify-content", "center");
  expect(IconElement2).toHaveStyleRule("align-items", "center");
  expect(IconElement2).toHaveStyleRule("padding", "8px");
  expect(IconElement2).toHaveStyleRule("font-size", "1rem");
  expect(IconElement2).toHaveStyleRule("border-radius", "100%");
  expect(IconElement2).toHaveStyleRule("cursor", "pointer");
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

test(`should handle onClicks`, () => {
  const mockOnClickIcon1 = jest.fn();
  const mockOnClickIcon2 = jest.fn();
  const mockOnClickIcon3 = jest.fn();

  render(<Icon onClickIcon={mockOnClickIcon1} color="red" icon="facebook" />);
  const consoleLogIcon1 = screen.getByTestId(`Icon-1-case`);
  fireEvent.click(consoleLogIcon1);
  expect(mockOnClickIcon1).toBeCalledTimes(1);
  mockOnClickIcon1(`Icon Test 1`);
  expect(mockOnClickIcon1).toBeCalledWith(`Icon Test 1`);

  render(<Icon onClickIcon={mockOnClickIcon2} color="blue" icon="google" />);
  const consoleLogIcon2 = screen.getByTestId(`Icon-2-case`);
  fireEvent.click(consoleLogIcon2);
  expect(mockOnClickIcon2).toBeCalledTimes(1);
  mockOnClickIcon2(`Icon Test 2`);
  expect(mockOnClickIcon2).toBeCalledWith(`Icon Test 2`);

  render(<Icon onClickIcon={mockOnClickIcon3} color="blue" icon="linkedin" />);
  const consoleLogIcon3 = screen.getByTestId(`Icon-3-case`);
  fireEvent.click(consoleLogIcon3);
  expect(mockOnClickIcon3).toBeCalledTimes(1);
  mockOnClickIcon3(`Icon Test 3`);
  expect(mockOnClickIcon3).toBeCalledWith(`Icon Test 3`);
});
