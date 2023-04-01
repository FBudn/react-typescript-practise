import React from "react";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import SignUpPage from "./SignUpPage";
import "jest-styled-components";

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
  const SignUpPageElement = screen.getByTestId(`test-signUpPage-id`);
  expect(SignUpPageElement).toBeInTheDocument();

  const { getByText } = within(screen.getByTestId(`test-signUpPage-id`));
  const { getAllByText } = within(screen.getByTestId(`test-signUpPage-id`));
  expect(getByText("Email")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
  expect(getAllByText("SIGN UP")[0]).toBeInTheDocument();
  expect(getAllByText("SIGN UP")).toHaveLength(2);
});
