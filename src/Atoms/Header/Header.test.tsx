/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Header from "./Header";
import "jest-styled-components";

test("Should render Header component", () => {
  render(<Header>Header Test</Header>);
  const HeaderElement = screen.getByTestId(`Header-1`);
  expect(HeaderElement).toBeInTheDocument();
});

test("Should match snapshot and have styles:", () => {
  const tree = TestRenderer.create(<Header>Header Test</Header>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("width", "100%");
  expect(tree).toHaveStyleRule("justify-content", "start");
  expect(tree).toHaveStyleRule("align-items", "center");
  expect(tree).toHaveStyleRule("display", "flex");
});
