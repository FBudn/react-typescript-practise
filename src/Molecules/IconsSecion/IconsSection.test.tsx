import React from "react";
import { render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import IconsSection, { IconsSectionProps } from "./IconsSection";
import "jest-styled-components";

const mockOnClickIcon = jest.fn();

const props: IconsSectionProps = {
  testId: `iconsSection-test-id`,
  onClickIcon: mockOnClickIcon,
  firstIconText: 0,
  secondIconText: 1,
  thirdIconText: 2,
  logs: [`facebook clicked`, `google clicked`, `linkedin clicked`],
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

test(`Should render three icons components`, () => {
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
