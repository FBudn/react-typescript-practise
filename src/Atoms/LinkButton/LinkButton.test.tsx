/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import LinkButton from "./LinkButton";
import "jest-styled-components";

test(`Should renred LinkButton component`, () => {
  const mockonClickLink = jest.fn();
  render(
    <LinkButton onClickLink={mockonClickLink}>LinkButton Test </LinkButton>,
  );
  const LinkButtonElement = screen.getByTestId(`LinkButton-1`);
  expect(LinkButtonElement).toBeInTheDocument();
});

test(`Should handleClick`, () => {
  const mockonClickLink = jest.fn();
  render(
    <LinkButton onClickLink={mockonClickLink}>LinkButton Test </LinkButton>,
  );
  const LinkButtonElement = screen.getByTestId(`LinkButton-1`);
  fireEvent.click(LinkButtonElement);
  expect(mockonClickLink).toBeCalledTimes(1);
  mockonClickLink(`LinkButton Test 1`);
  expect(mockonClickLink).toBeCalledWith(`LinkButton Test 1`);
});

test(`To match snapshot and have styles:`, () => {
  const mockonClickLink = jest.fn();
  const LinkButtonElement = TestRenderer.create(
    <LinkButton onClickLink={mockonClickLink}>LinkButton Test</LinkButton>,
  ).toJSON();
  expect(LinkButtonElement).toMatchSnapshot();
  expect(LinkButtonElement).toHaveStyleRule("display", "flex");
  expect(LinkButtonElement).toHaveStyleRule("border", "none");
  expect(LinkButtonElement).toHaveStyleRule("justify-content", "center");
  expect(LinkButtonElement).toHaveStyleRule("align-items", "end");
  expect(LinkButtonElement).toHaveStyleRule("justify-content", "center");
  expect(LinkButtonElement).toHaveStyleRule("align-items", "end");
  expect(LinkButtonElement).toHaveStyleRule("cursor", "pointer");
  expect(LinkButtonElement).toHaveStyleRule("text-decoration", "underline");
});
