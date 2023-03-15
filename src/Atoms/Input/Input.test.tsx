/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from "react";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Input, { InputProps } from "./Input";
import "jest-styled-components";

const props: InputProps = {
  type: `text`,
  testId: `test-input-id`,
};

test(`Should render Input component`, () => {
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`);
  expect(InputElement).toBeInTheDocument();
});

test(`Should match snapshot`, () => {
  const InputElement = TestRenderer.create(<Input {...props} />).toJSON();
  expect(InputElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`);
  expect(InputElement).toBeInTheDocument();

  expect(InputElement).toHaveStyle({
    display: "flex",
    width: "99%",
    borderRadius: "5px",
    height: "40px",
  });
});

test(`Should store input value`, () => {
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`) as HTMLInputElement;
  InputElement.value = "Test";
  expect(InputElement).toHaveValue("Test");
});
