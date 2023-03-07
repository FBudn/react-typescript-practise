/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import TextLabel from "./TextLabel";
import "jest-styled-components";

test(`Should render TextLabel component`, () => {
  render(
    <TextLabel
      color="black"
      align="center"
      justify="center"
      fontSize="1rem"
      fontWeight="500"
    >
      TextLabel Test
    </TextLabel>,
  );
  const TextLabelElement = screen.getByTestId(`TextLabel-1`);
  expect(TextLabelElement).toBeInTheDocument();
});

test(`Should match snapshot and havestyles:`, () => {
  const TextLabelElement = TestRenderer.create(
    <TextLabel
      color="black"
      align="center"
      justify="center"
      fontSize="1rem"
      fontWeight="500"
    >
      TextLabel Test
    </TextLabel>,
  ).toJSON();
  expect(TextLabelElement).toMatchSnapshot();
  expect(TextLabelElement).toHaveStyleRule("display", "flex");
  expect(TextLabelElement).toHaveStyleRule("border", "none");
});
