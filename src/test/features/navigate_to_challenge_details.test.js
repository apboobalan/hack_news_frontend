import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axiosMock from "axios";
import App from "../../App";
import { withProvider } from "../test_helper";
import { userData, challengeListData, challengeDetailsData } from "./mockData";
jest.mock("axios");

describe("Navigate to challenge details from challenge list", () => {
  test("Navigate to challenge details flow", async () => {
    axiosMock.post.mockResolvedValueOnce({ data: userData });
    axiosMock.get.mockResolvedValueOnce({ data: challengeListData });
    axiosMock.get.mockResolvedValueOnce({ data: challengeDetailsData });

    render(withProvider(<App />));
    expect(screen.getByTestId("sign-in-button")).toBeInTheDocument();

    userEvent.type(screen.getByTestId("email"), "b@b.b");
    userEvent.type(screen.getByTestId("password"), "b");
    userEvent.click(await screen.findByTestId("sign-in-button"));

    userEvent.click(await screen.findByTestId("challenge-1"));
    expect(await screen.findByText("Build hack news front end in react"));
    expect(await screen.findByText("Teams"));
  });
});
