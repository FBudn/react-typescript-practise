import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import FormSignUp, { FormSignUpProps } from "./FormSignUp";
import "jest-styled-components";

const mockOnButtonClick = jest.fn();

const props: FormSignUpProps = {
  onButtonClick: mockOnButtonClick,
  testId: `test-formSignup-id`,
};

test(`Should render FormSignUp component`, () => {
  render(<FormSignUp {...props} />);
  const FormSignUpElement = screen.getByTestId(`test-formSignup-id`);
  expect(FormSignUpElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const FormSignUpElement = TestRenderer.create(
    <FormSignUp {...props} />,
  ).toJSON;
  expect(FormSignUpElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<FormSignUp {...props} />);
  const FormSignUpElement = screen.getByTestId(`test-formSignup-id`);
  expect(FormSignUpElement).toBeInTheDocument();

  expect(FormSignUpElement).toHaveStyle({
    display: "flex",
    width: "100%",
  });
});

test(`Should render with texts`, () => {
  render(<FormSignUp {...props} />);
  const { getByText } = within(screen.getByTestId(`test-formSignup-id`));
  const { getAllByText } = within(screen.getByTestId(`test-formSignup-id`));
  expect(getByText("Email")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
  expect(getAllByText("SIGN UP")[0]).toBeInTheDocument();
  expect(getAllByText("SIGN UP")).toHaveLength(2);
});

test(`Should render and handle onButtonClick`, () => {
  render(<FormSignUp {...props} />);
  const FormSignUpElement = screen.getByTestId(`test-formSignup-id`);
  expect(FormSignUpElement).toBeInTheDocument();

  const ButtonElement = within(FormSignUpElement).getByTestId(`test-button-id`);
  expect(ButtonElement).toBeInTheDocument();
  expect(mockOnButtonClick).toBeCalledTimes(0);
  fireEvent.click(ButtonElement);
  expect(mockOnButtonClick).toBeCalledTimes(1);
});

// expect(getByText("Already a user? LOGIN")).toBeInTheDocument(); NIE TEN KOMPONENT
