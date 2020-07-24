import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App", () => {
  test("Integrate Tailwind css with create react app", () => {
    render(<App />);
    screen.getByText(/hack news/i)
  });
});
