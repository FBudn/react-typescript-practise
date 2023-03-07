/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import user from "@testing-library/user-event";
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
  user.click(LinkButtonElement);
  expect(mockonClickLink).toBeCalledTimes(1);
  mockonClickLink(`LinkButton Test 1`);
  expect(mockonClickLink).toBeCalledWith(`LinkButton Test 1`);
});

test(`To match snapshot and have styles:`, () => {
  const mockonClickLink = jest.fn();
  const tree = TestRenderer.create(
    <LinkButton onClickLink={mockonClickLink}>LinkButton Test</LinkButton>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("border", "none");
  expect(tree).toHaveStyleRule("justify-content", "center");
  expect(tree).toHaveStyleRule("align-items", "end");
  expect(tree).toHaveStyleRule("justify-content", "center");
  expect(tree).toHaveStyleRule("align-items", "end");
  expect(tree).toHaveStyleRule("cursor", "pointer");
  expect(tree).toHaveStyleRule("text-decoration", "underline");
});
