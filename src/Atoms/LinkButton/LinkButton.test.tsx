import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import LinkButton, { LinkButtonProps } from "./LinkButton";
import "jest-styled-components";

const mockonClickLink = jest.fn();

const props: LinkButtonProps = {
  testId: `test-linkButton-id`,
  children: `LinkButton Test`,
  onClickLink: mockonClickLink,
};

test(`Should renred LinkButton component`, () => {
  render(<LinkButton {...props} />);
  const LinkButtonElement = screen.getByTestId(`test-linkButton-id`);
  expect(LinkButtonElement).toBeInTheDocument();
});

test(`Schould match snapshot`, () => {
  const LinkButtonElement = TestRenderer.create(
    <LinkButton {...props} />,
  ).toJSON();
  expect(LinkButtonElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<LinkButton {...props} />);
  const LinkButtonElement = screen.getByTestId(`test-linkButton-id`);
  expect(LinkButtonElement).toBeInTheDocument();

  expect(LinkButtonElement).toHaveStyleRule("display", "flex");
  expect(LinkButtonElement).toHaveStyleRule("border", "none");
  expect(LinkButtonElement).toHaveStyleRule("justify-content", "center");
  expect(LinkButtonElement).toHaveStyleRule("align-items", "end");
  expect(LinkButtonElement).toHaveStyleRule("justify-content", "center");
  expect(LinkButtonElement).toHaveStyleRule("align-items", "end");
  expect(LinkButtonElement).toHaveStyleRule("cursor", "pointer");
  expect(LinkButtonElement).toHaveStyleRule("text-decoration", "underline");
});

test(`Should handleClick`, () => {
  render(<LinkButton {...props} />);
  const LinkButtonElement = screen.getByTestId(`test-linkButton-id`);
  fireEvent.click(LinkButtonElement);
  expect(mockonClickLink).toBeCalledTimes(1);
  mockonClickLink(`LinkButton Test 1`);
  expect(mockonClickLink).toBeCalledWith(`LinkButton Test 1`);
});
