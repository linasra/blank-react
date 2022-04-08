import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./About";

describe("About view", () => {
  it("should render the component correctly and match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
