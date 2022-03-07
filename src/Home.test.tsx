import { render, screen } from "@testing-library/react";
import Home from "./views/Home/Home";

test("renders home", () => {
  render(<Home />);
  const linkElement = screen.getByText(/I'm Luís Azevedo./i);
  expect(linkElement).toBeInTheDocument();
});
