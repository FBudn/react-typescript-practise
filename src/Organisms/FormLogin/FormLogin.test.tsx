import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import FormLogin, { FormLoginProps } from "./FormLogin";
import "jest-styled-components";

const mockOnButtonClick = jest.fn();

const props: FormLoginProps = {
  onButtonClick: mockOnButtonClick,
  testId: `test-formLogin-id`,
  // testIdButton: `test-button-id`,
};

test(`Should render FormLogin component`, () => {
  render(<FormLogin {...props} />);
  const FormLoginElement = screen.getByTestId(`test-formLogin-id`);
  expect(FormLoginElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const FormLoginElement = TestRenderer.create(<FormLogin {...props} />).toJSON;
  expect(FormLoginElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<FormLogin {...props} />);
  const FormLoginElement = screen.getByTestId(`test-formLogin-id`);
  expect(FormLoginElement).toBeInTheDocument();

  expect(FormLoginElement).toHaveStyle({
    display: "flex",
    width: "100%",
    // justifyContent: "center",
    // gap: "2px",
    // margin: "2px",
  });
});

test(`Should render with texts`, () => {
  render(<FormLogin {...props} />);
  const { getByText } = within(screen.getByTestId(`test-formLogin-id`));
  const { getAllByText } = within(screen.getByTestId(`test-formLogin-id`));
  expect(getByText("Email")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
  expect(getAllByText("LOGIN")[0]).toBeInTheDocument();
  expect(getAllByText("LOGIN")).toHaveLength(2);
  expect(getByText("Remember me?")).toBeInTheDocument();
  expect(getByText("Forgot Password?")).toBeInTheDocument();
});

test(`Should render and handle onButtonClick`, () => {
  render(<FormLogin {...props} />);
  const FormLoginElement = screen.getByTestId(`test-formLogin-id`);
  expect(FormLoginElement).toBeInTheDocument();

  const ButtonElement = within(FormLoginElement).getByTestId(`test-button-id`);
  expect(ButtonElement).toBeInTheDocument();
  expect(mockOnButtonClick).toBeCalledTimes(0);
  fireEvent.click(ButtonElement);
  expect(mockOnButtonClick).toBeCalledTimes(1);
});
