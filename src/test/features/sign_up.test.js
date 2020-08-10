import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axiosMock from "axios";
import App from "../../App";
import { withProvider } from "../test_helper";
import {userData, challengeListData} from './mockData'
jest.mock("axios");

describe("Test sign up flow", () => {
  test("sign up flow", async () => {
    axiosMock.post.mockResolvedValueOnce({ data: userData });
    axiosMock.get.mockResolvedValueOnce({ data: challengeListData });

    render(withProvider(<App />));
    expect(screen.getByTestId("sign-in-button")).toBeInTheDocument();
    userEvent.click(screen.getByText("click here."));

    userEvent.type(screen.getByTestId("name"), "b");
    userEvent.type(screen.getByTestId("email"), "b@b.b");
    userEvent.type(screen.getByTestId("password"), "b");
    userEvent.click(await screen.findByTestId("sign-up-button"));

    expect(await screen.findByText("Challenges")).toBeInTheDocument();
    expect(await screen.findByText("React frontend")).toBeInTheDocument();
    expect(await screen.findByText("Elixir backend")).toBeInTheDocument();
  });
});
