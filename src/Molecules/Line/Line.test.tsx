import React from "react";
import { render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Line, { LineProps } from "./Line";
import "jest-styled-components";

const props: LineProps = {
  children: `Line Test`,
  testId: `test-line-id`,
};

test(`Should render Line component`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const LineElement = TestRenderer.create(<Line {...props} />).toJSON;
  expect(LineElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeInTheDocument();

  expect(LineElement).toHaveStyle({
    display: "flex",
    maxWidth: "21rem",
    justifyContent: "center",
    alignItems: "center",
    margin: "2px",
  });
});

test(`Should render with text`, () => {
  render(<Line {...props} />);
  const { getByText } = within(screen.getByTestId(`test-line-id`));
  expect(getByText("Line Test")).toBeInTheDocument();
});

test(`Should render and <hr> element should have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeInTheDocument();

  const HrElement = within(LineElement).getByTestId(`test-Line-HRStyled`);
  expect(HrElement).toBeInTheDocument();
  expect(HrElement).toHaveStyle({
    width: "117px",
    border: "none",
    height: "2px",
    background: "rgb(229 231 235)",
  });
});

test(`Should render and text-box element should have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeInTheDocument();

  const TextBoxElement = within(LineElement).getByTestId(
    `test-Line-LineTextBox`,
  );
  expect(TextBoxElement).toBeInTheDocument();
  expect(TextBoxElement).toHaveStyle({
    display: "flex",
    padding: "2px",
  });
});
