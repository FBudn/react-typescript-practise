import React from "react";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Header, { HeaderProps } from "./Header";
import "jest-styled-components";

const props: HeaderProps = {
  children: `Header Test`,
  testId: `test-header-id`,
};

test("Should render Header component", () => {
  render(<Header {...props} />);
  const HeaderElement = screen.getByTestId(`test-header-id`);
  expect(HeaderElement).toBeInTheDocument();
});

test("Should match snapshot:", () => {
  const HeaderElement = TestRenderer.create(<Header {...props} />).toJSON();
  expect(HeaderElement).toMatchSnapshot();
});

test("Should render and have styles:", () => {
  render(<Header {...props} />);
  const HeaderElement = screen.getByTestId(`test-header-id`);
  expect(HeaderElement).toBeInTheDocument();

  expect(HeaderElement).toHaveStyleRule("display", "flex");
  expect(HeaderElement).toHaveStyleRule("width", "100%");
  expect(HeaderElement).toHaveStyleRule("justify-content", "start");
  expect(HeaderElement).toHaveStyleRule("align-items", "center");
  expect(HeaderElement).toHaveStyleRule("display", "flex");
});

test(`Should render with text`, () => {
  render(<Header {...props} />);
  const HeaderElement = screen.getByTestId(`test-header-id`);
  expect(HeaderElement).toBeInTheDocument();
  expect(HeaderElement).toHaveTextContent(`Header Test`);
});
