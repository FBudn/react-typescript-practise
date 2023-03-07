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
  const HeaderElement = TestRenderer.create(
    <Header>Header Test</Header>,
  ).toJSON();
  expect(HeaderElement).toMatchSnapshot();
  expect(HeaderElement).toHaveStyleRule("display", "flex");
  expect(HeaderElement).toHaveStyleRule("width", "100%");
  expect(HeaderElement).toHaveStyleRule("justify-content", "start");
  expect(HeaderElement).toHaveStyleRule("align-items", "center");
  expect(HeaderElement).toHaveStyleRule("display", "flex");
});
