import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import LineSection, { LineSectionProps } from "./LineSection";
import "jest-styled-components";

const mockOnClickIcon = jest.fn();
const mockOnClickLink = jest.fn();

const props: LineSectionProps = {
  onClickIcon: mockOnClickIcon,
  onClickLink: mockOnClickLink,
  testId: `test-LineSection-id`,
  infoText: `Link Test`,
  linkText: `LinkText Test`,
  lineText: `LineText Test`,
  logs: [`facebook clicked`, `google clicked`, `linkedin clicked`],
  testIdButton: `test-button-id`,
};

test(`Should render LineSection component`, () => {
  render(<LineSection {...props} />);
  const LineSectionElement = screen.getByTestId(`test-LineSection-id`);
  expect(LineSectionElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const LineSectionElement = TestRenderer.create(
    <LineSection {...props} />,
  ).toJSON;
  expect(LineSectionElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<LineSection {...props} />);
  const LineSectionElement = screen.getByTestId(`test-LineSection-id`);
  expect(LineSectionElement).toBeInTheDocument();

  expect(LineSectionElement).toHaveStyle({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
  });
});

test(`Should render with texts`, () => {
  render(<LineSection {...props} />);
  const { getByText } = within(screen.getByTestId(`test-LineSection-id`));
  expect(getByText("Link Test")).toBeInTheDocument();
  expect(getByText("LinkText Test")).toBeInTheDocument();
  expect(getByText("LineText Test")).toBeInTheDocument();
});

test(`Should render and handle onButtonLinkClick`, () => {
  render(<LineSection {...props} />);
  const LineSectionElement = screen.getByTestId(`test-LineSection-id`);
  expect(LineSectionElement).toBeInTheDocument();

  const ButtonLinkElement =
    within(LineSectionElement).getByTestId(`test-button-id`);
  expect(ButtonLinkElement).toBeInTheDocument();

  expect(mockOnClickLink).toBeCalledTimes(0);
  fireEvent.click(ButtonLinkElement);
  expect(mockOnClickLink).toBeCalledTimes(1);
});
