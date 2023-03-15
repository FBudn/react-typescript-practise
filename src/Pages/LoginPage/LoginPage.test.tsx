/* eslint-disable import/no-duplicates */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import LoginPage from "./LoginPage";
import "jest-styled-components";

// const mockOnButtonClick = jest.fn();  leaved to remember about testing/mocking functions on this level

test(`Should render LoginPage component`, () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  );
  const LoginPageElement = screen.getByTestId(`test-loginPage-id`);
  expect(LoginPageElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const LoginPageElement = TestRenderer.create(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  ).toJSON;
  expect(LoginPageElement).toMatchSnapshot();
});

test(`Should render with texts`, () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  );
  const { getByText } = within(screen.getByTestId(`test-loginPage-id`));
  const { getAllByText } = within(screen.getByTestId(`test-loginPage-id`));
  expect(getByText("Email")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
  expect(getAllByText("LOGIN")[0]).toBeInTheDocument();
  expect(getAllByText("LOGIN")).toHaveLength(2);
  expect(getByText("Remember me?")).toBeInTheDocument();
  expect(getByText("Forgot Password?")).toBeInTheDocument();
});

/* leaved to remember about testing/mocking functions on this level
test(`Should render and handle onButtonClick`, () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  );
  const LoginPageElement = screen.getByTestId(`test-loginPage-id`);
  expect(LoginPageElement).toBeInTheDocument();

  const ButtonElement = within(LoginPageElement).getByTestId(`test-button-id`);
   const ButtonOnClick = within(LoginPageElement).getBy
  expect(ButtonElement).toBeInTheDocument();
   expect(mockOnButtonClick).toBeCalledTimes(0);
   fireEvent.click(ButtonElement);
   expect(mockOnButtonClick).toBeCalledTimes(1);
});
*/
