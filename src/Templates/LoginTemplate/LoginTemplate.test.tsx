import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import LoginTemplate, { LoginTemplateProps } from "./LoginTemplate";
import "jest-styled-components";

const mockOnClick = jest.fn();

const props: LoginTemplateProps = {
  onButtonClick: mockOnClick,
  testId: `test-loginTemplate-id`,
  onClickIcon: mockOnClick,
  onClickLink: mockOnClick,
};

test(`Should render LoginTemplate component`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const LoginTemplateElement = TestRenderer.create(
    <LoginTemplate {...props} />,
  ).toJSON;
  expect(LoginTemplateElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeInTheDocument();

  expect(LoginTemplateElement).toHaveStyle({
    display: "flex",
    width: "100%",
  });
});

test(`Should render with texts`, () => {
  render(<LoginTemplate {...props} />);
  const { getByText } = within(screen.getByTestId(`test-loginTemplate-id`));
  const { getAllByText } = within(screen.getByTestId(`test-loginTemplate-id`));
  expect(getByText("Email")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
  expect(getAllByText("LOGIN")[0]).toBeInTheDocument();
  expect(getAllByText("LOGIN")).toHaveLength(2);
  expect(getByText("Remember me?")).toBeInTheDocument();
  expect(getByText("Forgot Password?")).toBeInTheDocument();
});

test(`(Button from Forms) Should render and handle onButtonClick`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeInTheDocument();

  const ButtonElement =
    within(LoginTemplateElement).getByTestId(`test-button-id`);
  expect(ButtonElement).toBeInTheDocument();
  expect(mockOnClick).toBeCalledTimes(0);
  fireEvent.click(ButtonElement);
  expect(mockOnClick).toBeCalledTimes(1);
});

test(`(Button from Footer) Should render and handle onButtonLinkClick`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeInTheDocument();

  const ButtonLinkElement = within(LoginTemplateElement).getByTestId(
    `test-Footer-linkButton-id`,
  );
  expect(ButtonLinkElement).toBeInTheDocument();
  expect(mockOnClick).toBeCalledTimes(0);
  fireEvent.click(ButtonLinkElement);
  expect(mockOnClick).toBeCalledTimes(1);
});

test(`CheckboxInput should not be checked`, () => {
  render(<LoginTemplate {...props} />);
  const ChecboxAndLabelElem = screen.getByTestId(`test-loginTemplate-id`);
  expect(ChecboxAndLabelElem).toBeInTheDocument();
  const CheckboxInput =
    within(ChecboxAndLabelElem).getByTestId(`test-checkbox-id`);
  expect(CheckboxInput).toBeInTheDocument();
  expect(CheckboxInput).not.toBeChecked();
});

test(`Should render and have background styles:`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeInTheDocument();

  const Background =
    within(LoginTemplateElement).getByTestId(`test-background-id`);
  expect(Background).toBeInTheDocument();

  expect(Background).toHaveStyle({
    display: "flex",
    width: "100%",
    background: "rgb(96 165 250)",
    justifyContent: "center",
    height: "100%",
    margin: 0,
  });
});

test(`Should render and have maxwidth styles:`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeInTheDocument();

  const MaxWidth = within(LoginTemplateElement).getByTestId(`test-maxWidth-id`);
  expect(MaxWidth).toBeInTheDocument();

  expect(MaxWidth).toHaveStyle({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    maxWidth: "1700px",
  });
});

test(`Should render and have tile styles:`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeInTheDocument();

  const Tile = within(LoginTemplateElement).getByTestId(`test-tile-id`);
  expect(Tile).toBeInTheDocument();

  expect(Tile).toHaveStyle({
    background: "white",
    display: "flex",
    justifyContent: "center",
    paddingTop: "35px",
    paddingBottom: "35px",
    borderRadius: "10px",
    width: "80%",
  });
});

test(`Should render and have tileContainer styles:`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeInTheDocument();

  const TileContainer = within(LoginTemplateElement).getByTestId(
    `test-tileContainer-id`,
  );
  expect(TileContainer).toBeInTheDocument();

  expect(TileContainer).toHaveStyle({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 16px 16px 16px",
    width: "75%",
    gap: "6px",
  });
});
