import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import CreatePart from "../pages/CreatePart";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<CreatePart />);
  expect(asFragment(<CreatePart />)).toMatchSnapshot();
});

it("input on change value", () => {
    const { getByTestId } = render(<CreatePart />);
    fireEvent.input(getByTestId("name"), { target: { value: "12" } });
  });