import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Auth from "../../components/Auth";
import { SIGN_IN } from "../../constants";

describe("Auth component", () => {
  test("renders signup page", () => {
    render(<Auth />);

    screen.getByText("Sign Up");
    screen.getByLabelText("Name :");
    screen.getByLabelText("Email :");
    screen.getByLabelText("Password :");
  });

  test("renders signin page without name field", () => {
    render(<Auth type={SIGN_IN} />);

    expect(screen.queryByText("Name :")).not.toBeInTheDocument();
    screen.getByText("Sign In");
    screen.getByLabelText("Email :");
    screen.getByLabelText("Password :");
  });

  test("renders signin page with a button name Signin and on click calls a handler with signIn data", async () => {
    const onClickHandler = jest.fn();
    render(<Auth type={SIGN_IN} onClickHandler={onClickHandler} />);

    const signInButton = screen.getByTestId("sign-in-button");
    await userEvent.type(screen.getByTestId("email"), "booda@booda.com");
    await userEvent.type(screen.getByTestId("password"), "...");
    userEvent.click(signInButton);

    await expect(onClickHandler).toHaveBeenCalledTimes(1);
    await expect(onClickHandler).toBeCalledWith({
      type: SIGN_IN,
      email: "booda@booda.com",
      password: "...",
    });
  });

  test("renders signup page with a button name Signup and on click calls a handler with signup data", async () => {
    const onClickHandler = jest.fn();
    render(<Auth type={"signUp"} onClickHandler={onClickHandler} />);

    const signUpButton = screen.getByTestId("sign-up-button");
    await userEvent.type(screen.getByTestId("name"), "booda");
    await userEvent.type(screen.getByTestId("email"), "booda@booda.com");
    await userEvent.type(screen.getByTestId("password"), "...");
    userEvent.click(signUpButton);

    await expect(onClickHandler).toHaveBeenCalledTimes(1);
    await expect(onClickHandler).toBeCalledWith({
      type: "signUp",
      name: "booda",
      email: "booda@booda.com",
      password: "...",
    });
  });
});
