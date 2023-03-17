import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import IconsSection, { IconsSectionProps } from "./IconsSection";
import "jest-styled-components";

const mockOnClickIcon = jest.fn();

const props: IconsSectionProps = {
  testId: `test-iconsSection-id`,
  onClickIcon: mockOnClickIcon,
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

  const Icon1 = within(IconsSectionElement).getByTestId(`test-icon1-id`);
  expect(Icon1).toBeInTheDocument();

  const Icon2 = within(IconsSectionElement).getByTestId(`test-icon2-id`);
  expect(Icon2).toBeInTheDocument();

  const Icon3 = within(IconsSectionElement).getByTestId(`test-icon3-id`);
  expect(Icon3).toBeInTheDocument();
});

test(`Should render and handle onClickIcon`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionlement = screen.getByTestId(`iconsSection-test-id`);
  expect(IconsSectionlement).toBeInTheDocument();

  const IconElement = within(IconsSectionlement).getByTestId(`test-icon1-id`);
  expect(mockOnClickIcon).toBeCalledTimes(0);
  fireEvent.click(IconElement);
  expect(mockOnClickIcon).toBeCalledTimes(1);

  const IconElement2 = within(IconsSectionlement).getByTestId(`test-icon2-id`);
  expect(mockOnClickIcon).toBeCalledTimes(1);
  fireEvent.click(IconElement2);
  expect(mockOnClickIcon).toBeCalledTimes(2);

  const IconElement3 = within(IconsSectionlement).getByTestId(`test-icon3-id`);
  expect(mockOnClickIcon).toBeCalledTimes(2);
  fireEvent.click(IconElement3);
  expect(mockOnClickIcon).toBeCalledTimes(3);
});
