import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Homepage from "../Homepage";

describe("<Homepage >", () => {
  const props = {
    title: "My homepage!",
    color: "#435234",
    backgroundColor: "#435234",
    id: 1,
    description: "some description",
  };

  test("should render without props", () => {
    const component = renderer.create(<Homepage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render with all props", () => {
    const component = renderer.create(<Homepage {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render link if showLink prop is true", () => {
    const component = renderer.create(
      <MemoryRouter>
        <Homepage {...props} showLink={true} />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
