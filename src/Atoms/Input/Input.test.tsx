/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
// import user from "@testing-library/user-event";
import Input from "./Input";
import "jest-styled-components";

test(`Should render Input component`, () => {
  render(<Input type="text" />);
  const InputElement = screen.getByTestId(`InputField-1`);
  expect(InputElement).toBeInTheDocument();
});
/* test(`Should store input value`, () => {
  const mockInputRef = jest.fn();
  const InputElement = screen.getByTestId(`InputField-1`);
   user.type(InputElement);
   render(<Input type="text" value={mockInputRef} />);
   expect(mockInputRef).toBeCalledTimes(4);
}); */
test(`Should match snapshot and have styles:`, () => {
  const InputElement = TestRenderer.create(<Input type="text" />).toJSON();
  expect(InputElement).toMatchSnapshot();
  expect(InputElement).toHaveStyleRule("display", "flex");
});
