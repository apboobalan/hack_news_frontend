import React from "react";
import { render, screen } from "@testing-library/react";
import Auth from "../../components/Auth";

describe("Auth component", () => {
  test("renders signup page", () => {
    render(<Auth />);

    screen.getByText("Sign Up");
    screen.getByLabelText("Name :");
    screen.getByLabelText("Email :");
    screen.getByLabelText("Password :");
  });

  test("renders signin page without name field", () => {
    render(<Auth type={"signIn"} />);

    expect(screen.queryByText("Name :")).not.toBeInTheDocument();
    screen.getByText("Sign In");
    screen.getByLabelText("Email :");
    screen.getByLabelText("Password :");
  });
});
