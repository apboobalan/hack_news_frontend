import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { withProvider } from "./test_helper";

describe("App", () => {
  test("Integrate Tailwind css with create react app", async () => {
    render(withProvider(<App/>));
    await screen.findByText("HACK NEWS.");
  });
});
