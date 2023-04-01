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

test(`Should render with text TextLabel`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeInTheDocument();
  const TextLabelElement =
    within(FooterElement).getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeInTheDocument();
  expect(TextLabelElement).toHaveTextContent(`Link Test`);
});

test(`Should render with text Line`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeInTheDocument();

  const LineElement = within(FooterElement).getByTestId(`test-line-id`);
  expect(LineElement).toBeInTheDocument();
  expect(LineElement).toHaveTextContent(`LineText Test`);
});

test(`Should render with text LinkButton`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeInTheDocument();

  const LinkButtonElement = within(FooterElement).getByTestId(
    `test-Footer-linkButton-id`,
  );
  expect(LinkButtonElement).toBeInTheDocument();
  expect(LinkButtonElement).toHaveTextContent(`LinkText Test`);
});

test(`Should render and handle onButtonLinkClick`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeInTheDocument();

  const ButtonLinkElement = within(FooterElement).getByTestId(
    `test-Footer-linkButton-id`,
  );
  expect(ButtonLinkElement).toBeInTheDocument();

  expect(mockOnClickLink).toBeCalledTimes(0);
  fireEvent.click(ButtonLinkElement);
  expect(mockOnClickLink).toBeCalledTimes(1);
});

test(`Should render and handle onIconLinkClick`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeInTheDocument();

  const IconLinkElement = within(FooterElement).getByTestId(`test-icon3-id`);
  expect(IconLinkElement).toBeInTheDocument();

  expect(mockOnClickIcon).toBeCalledTimes(0);
  fireEvent.click(IconLinkElement);
  expect(mockOnClickIcon).toBeCalledTimes(1);
});
