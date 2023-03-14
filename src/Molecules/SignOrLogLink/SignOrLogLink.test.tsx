import React from "react";
import { render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import SignOrLogLink, { SignOrLogLinkProps } from "./SignOrLogLink";
import "jest-styled-components";

const mockOnClickLink = jest.fn();

const props: SignOrLogLinkProps = {
  children: `SignOrLogLink Test`,
  linkText: `linkText Test`,
  onClickLink: mockOnClickLink,
  testId: `test-signOrLogLink-id`,
  testIdLabel: `test-label-id`,
  //  testIdButton: `test-button-id`,
};

test(`Should render SignOrLogLink component`, () => {
  render(<SignOrLogLink {...props} />);
  const SignOrLogLinkElement = screen.getByTestId(`test-signOrLogLink-id`);
  expect(SignOrLogLinkElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const SignOrLogLinkElement = TestRenderer.create(
    <SignOrLogLink {...props} />,
  ).toJSON;
  expect(SignOrLogLinkElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<SignOrLogLink {...props} />);
  const SignOrLogLinkElement = screen.getByTestId(`test-signOrLogLink-id`);
  expect(SignOrLogLinkElement).toBeInTheDocument();

  expect(SignOrLogLinkElement).toHaveStyle({
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: "2px",
    margin: "2px",
  });
});

test(`Should render with text`, () => {
  render(<SignOrLogLink {...props} />);
  const { getByText } = within(screen.getByTestId(`test-signOrLogLink-id`));
  expect(getByText("SignOrLogLink Test")).toBeInTheDocument();
  expect(getByText("linkText Test")).toBeInTheDocument();
});

/* test(`Should render and handle onClickIcon`, () => {
  render(<SignOrLogLink {...props} />);
  const SignOrLogLinkElement = screen.getByTestId(`test-signOrLogLink-id`);
  expect(SignOrLogLinkElement).toBeInTheDocument();

  const LinkButtonElement =
    within(SignOrLogLinkElement).getByTestId(`test-button-id`);
  expect(LinkButtonElement).toBeInTheDocument();
  expect(mockOnClickLink).toBeCalledTimes(0);
  fireEvent.click(LinkButtonElement);
  expect(mockOnClickLink).toBeCalledTimes(1);
}); */
