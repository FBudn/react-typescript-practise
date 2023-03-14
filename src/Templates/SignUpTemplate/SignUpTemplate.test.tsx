import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import SignUpTemplate, { SignUpTemplateProps } from "./SignUpTemplate";
import "jest-styled-components";

const mockOnClick = jest.fn();

const props: SignUpTemplateProps = {
  onButtonClick: mockOnClick,
  testId: `test-signUpTemplate-id`,
  onClickIcon: mockOnClick,
  onClickLink: mockOnClick,
  testIdButton: `test-button-id`,
  testIdButtonLink: `test-Linkbutton-id`,
  testIdBackground: `test-background-id`,
  testIdGlobalStyle: `test-globalStyle-id`,
  testIdMaxWidth: `test-maxWidth-id`,
  testIdTile: `test-tile-id`,
  IconsLogs: [`facebook`, `google`, `linkedin`],
  testIdTileContainer: `test-tileContainer-id`,
};

test(`Should render SignUpTemplate component`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeInTheDocument();
});

test(`Should match the snapshot`, () => {
  const SignUpTemplateElement = TestRenderer.create(
    <SignUpTemplate {...props} />,
  ).toJSON;
  expect(SignUpTemplateElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeInTheDocument();

  expect(SignUpTemplateElement).toHaveStyle({
    display: "flex",
    width: "100%",
  });
});

test(`Should render with texts`, () => {
  render(<SignUpTemplate {...props} />);
  const { getByText } = within(screen.getByTestId(`test-signUpTemplate-id`));
  const { getAllByText } = within(screen.getByTestId(`test-signUpTemplate-id`));
  expect(getByText("Email")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
  expect(getAllByText("SIGN UP")[0]).toBeInTheDocument();
  expect(getAllByText("SIGN UP")).toHaveLength(2);
});

test(`(Button from Forms) Should render and handle onButtonClick`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeInTheDocument();

  const ButtonElement = within(SignUpTemplateElement).getByTestId(
    `test-button-id`,
  );
  expect(ButtonElement).toBeInTheDocument();
  expect(mockOnClick).toBeCalledTimes(0);
  fireEvent.click(ButtonElement);
  expect(mockOnClick).toBeCalledTimes(1);
});

test(`(Button from LineSection) Should render and handle onButtonLinkClick`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeInTheDocument();

  const ButtonLinkElement = within(SignUpTemplateElement).getByTestId(
    `test-Linkbutton-id`,
  );
  expect(ButtonLinkElement).toBeInTheDocument();
  expect(mockOnClick).toBeCalledTimes(0);
  fireEvent.click(ButtonLinkElement);
  expect(mockOnClick).toBeCalledTimes(1);
});

/* test(`Should render and have global styles:`, () => {
  render(<SignUpTemplate {...props} />);
  const GlobalStyle = screen.getByTestId(`test-globalStyle-id`);
  expect(GlobalStyle).toBeInTheDocument();

  expect(GlobalStyle).toHaveStyle({
    margin: 0,
    padding: 0,
  });
}); */

test(`Should render and have backgound styles:`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeInTheDocument();

  const Background = within(SignUpTemplateElement).getByTestId(
    `test-background-id`,
  );
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
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeInTheDocument();

  const MaxWidth = within(SignUpTemplateElement).getByTestId(
    `test-maxWidth-id`,
  );
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
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeInTheDocument();

  const Tile = within(SignUpTemplateElement).getByTestId(`test-tile-id`);
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
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeInTheDocument();

  const TileContainer = within(SignUpTemplateElement).getByTestId(
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
