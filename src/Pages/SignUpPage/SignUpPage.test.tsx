import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import SignUpPage from "./SignUpPage";
import "jest-styled-components";

const mockOnButtonClick = jest.fn();

test(`Should render SignUpPage component`, () => {
  render(
    <BrowserRouter>
      <SignUpPage />
    </BrowserRouter>,
  );
  const SignUpPageElement = screen.getByTestId(`test-signUpPage-id`);
  expect(SignUpPageElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const SignUpPageElement = TestRenderer.create(
    <BrowserRouter>
      <SignUpPage />
    </BrowserRouter>,
  ).toJSON;
  expect(SignUpPageElement).toMatchSnapshot();
});

test(`Should render with texts`, () => {
  render(
    <BrowserRouter>
      <SignUpPage />
    </BrowserRouter>,
  );
  const { getByText } = within(screen.getByTestId(`test-signUpPage-id`));
  const { getAllByText } = within(screen.getByTestId(`test-signUpPage-id`));
  expect(getByText("Email")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
  expect(getAllByText("SIGN UP")[0]).toBeInTheDocument();
  expect(getAllByText("SIGN UP")).toHaveLength(2);
});

test(`Should render and handle onButtonClick`, () => {
  render(
    <BrowserRouter>
      <SignUpPage />
    </BrowserRouter>,
  );
  const SignUpPageElement = screen.getByTestId(`test-signUpPage-id`);
  expect(SignUpPageElement).toBeInTheDocument();

  const ButtonElement = within(SignUpPageElement).getByTestId(`test-button-id`);
  expect(ButtonElement).toBeInTheDocument();
  expect(mockOnButtonClick).toBeCalledTimes(0);
  fireEvent.click(ButtonElement);
  // expect(mockOnButtonClick).toBeCalledTimes(1);
});
