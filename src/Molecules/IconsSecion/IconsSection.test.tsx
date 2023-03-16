import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import IconsSection, { IconsSectionProps } from "./IconsSection";
import "jest-styled-components";

const mockOnClickIcon = jest.fn();

const props: IconsSectionProps = {
  testId: `iconsSection-test-id`,
  onClickIcon: mockOnClickIcon,
  testIdIcon1: `Icon-1-case`,
  testIdIcon2: `Icon-2-case`,
  testIdIcon3: `Icon-3-case`,
};

test(`Should render IconsSection component`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`iconsSection-test-id`);
  expect(IconsSectionElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const IconsSectionElement = TestRenderer.create(
    <IconsSection {...props} />,
  ).toJSON;
  expect(IconsSectionElement).toMatchSnapshot();
});

test(`Should render and have styles`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`iconsSection-test-id`);
  expect(IconsSectionElement).toBeInTheDocument();

  expect(IconsSectionElement).toHaveStyle({
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  });
});

test(`Should render three icon components`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`iconsSection-test-id`);
  expect(IconsSectionElement).toBeInTheDocument();

  const Icon1 = within(IconsSectionElement).getByTestId(`Icon-1-case`);
  expect(Icon1).toBeInTheDocument();

  const Icon2 = within(IconsSectionElement).getByTestId(`Icon-2-case`);
  expect(Icon2).toBeInTheDocument();

  const Icon3 = within(IconsSectionElement).getByTestId(`Icon-3-case`);
  expect(Icon3).toBeInTheDocument();
});

test(`Should render and handle onClickIcon`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionlement = screen.getByTestId(`iconsSection-test-id`);
  expect(IconsSectionlement).toBeInTheDocument();

  const IconElement = within(IconsSectionlement).getByTestId(`Icon-1-case`);
  expect(mockOnClickIcon).toBeCalledTimes(0);
  fireEvent.click(IconElement);
  expect(mockOnClickIcon).toBeCalledTimes(1);

  const IconElement2 = within(IconsSectionlement).getByTestId(`Icon-2-case`);
  expect(mockOnClickIcon).toBeCalledTimes(1);
  fireEvent.click(IconElement2);
  expect(mockOnClickIcon).toBeCalledTimes(2);

  const IconElement3 = within(IconsSectionlement).getByTestId(`Icon-3-case`);
  expect(mockOnClickIcon).toBeCalledTimes(2);
  fireEvent.click(IconElement3);
  expect(mockOnClickIcon).toBeCalledTimes(3);
});
