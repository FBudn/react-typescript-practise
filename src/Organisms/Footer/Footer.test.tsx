import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Footer, { FooterProps } from "./Footer";
import "jest-styled-components";

const mockOnClickIcon = jest.fn();
const mockOnClickLink = jest.fn();

const props: FooterProps = {
  onClickIcon: mockOnClickIcon,
  onClickLink: mockOnClickLink,
  testId: `test-footer-id`,
  infoText: `Link Test`,
  linkText: `LinkText Test`,
  lineText: `LineText Test`,
  logs: [`facebook clicked`, `google clicked`, `linkedin clicked`],
  testIdButton: `test-button-id`,
};

test(`Should render Footer component`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const FooterElement = TestRenderer.create(<Footer {...props} />).toJSON;
  expect(FooterElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeInTheDocument();

  expect(FooterElement).toHaveStyle({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
  });
});

test(`Should render with texts`, () => {
  render(<Footer {...props} />);
  const { getByText } = within(screen.getByTestId(`test-footer-id`));
  expect(getByText("Link Test")).toBeInTheDocument();
  expect(getByText("LinkText Test")).toBeInTheDocument();
  expect(getByText("LineText Test")).toBeInTheDocument();
});

test(`Should render and handle onButtonLinkClick`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeInTheDocument();

  const ButtonLinkElement = within(FooterElement).getByTestId(`test-button-id`);
  expect(ButtonLinkElement).toBeInTheDocument();

  expect(mockOnClickLink).toBeCalledTimes(0);
  fireEvent.click(ButtonLinkElement);
  expect(mockOnClickLink).toBeCalledTimes(1);
});
