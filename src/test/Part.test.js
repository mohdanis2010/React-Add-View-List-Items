import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import Part from '../components/Part';

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Part name="Hello!" status="status" id="1" />);
    expect(asFragment()).toMatchSnapshot();
  });

  // it('should equal to 0', () => {
  //   const { getByTestId } = render(<Part />); 
  //   expect(getByTestId('list-item')).toHaveClass('list-item')
  //  });




