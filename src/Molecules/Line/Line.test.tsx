import React from "react";
import { render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Line, { LineProps } from "./Line";
import "jest-styled-components";

const props: LineProps = {
  children: `Line Test`,
  testId: `line-test-id`,
  testIdHR: `hr-test-id`,
  testIdTextBox: `textBox-test-id`,
};

test(`Should render Line component`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`line-test-id`);
  expect(LineElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const LineElement = TestRenderer.create(<Line {...props} />).toJSON;
  expect(LineElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`line-test-id`);
  expect(LineElement).toBeInTheDocument();

  expect(LineElement).toHaveStyle({
    display: "flex",
    maxWidth: "21rem",
    justifyContent: "center",
    alignItems: "center",
    margin: "2px",
  });
});

test(`Should render and <hr> element have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`line-test-id`);
  expect(LineElement).toBeInTheDocument();

  const HrElement = within(LineElement).getByTestId(`hr-test-id`);
  expect(HrElement).toBeInTheDocument();
  expect(HrElement).toHaveStyle({
    width: "117px",
    border: "none",
    height: "2px",
    background: "rgb(229 231 235)",
  });
});

/* test(`Should render and <hr> element have media query styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`line-test-id`);
  expect(LineElement).toBeInTheDocument();

  const HrElement = within(LineElement).getByTestId(`hr-test-id`);
  expect(HrElement).toBeInTheDocument();
  expect(HrElement).toHaveStyleRule("border", "none", {
    media: "screen and (min-width: 768px)",
  });
}); */

test(`Should render and text-box element have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`line-test-id`);
  expect(LineElement).toBeInTheDocument();

  const TextBoxElement = within(LineElement).getByTestId(`textBox-test-id`);
  expect(TextBoxElement).toBeInTheDocument();
  expect(TextBoxElement).toHaveStyle({
    // border: "2px",
    display: "flex",
    // borderRadius: "5px",
    // fontSize: "0.875rem",
    // fontWeight: "500",
    // items: "center",
    //  lineHeight: "1.25rem",
    // text: "center",
    padding: "2px",
    // color: "rgb(156 163 175)",
  });
});
