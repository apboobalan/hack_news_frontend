import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axiosMock from "axios";
import App from "../../App";
import { withProvider } from "../test_helper";
import {
  userData,
  challengeListData,
  challengeDetailsData,
  createNewTeamResponseData,
  challengeDetailsDataWithAddedTeam,
} from "./mockData";
jest.mock("axios");

describe("Create team flow", () => {
  test("Create team flow", async () => {
    axiosMock.post.mockResolvedValueOnce({ data: userData });
    axiosMock.get.mockResolvedValueOnce({ data: challengeListData });
    axiosMock.get.mockResolvedValueOnce({ data: challengeDetailsData });
    axiosMock.post.mockResolvedValueOnce({ data: createNewTeamResponseData });
    axiosMock.get.mockResolvedValueOnce({ data: challengeDetailsDataWithAddedTeam });

    render(withProvider(<App />));
    expect(screen.getByTestId("sign-in-button")).toBeInTheDocument();

    userEvent.type(screen.getByTestId("email"), "b@b.b");
    userEvent.type(screen.getByTestId("password"), "b");
    userEvent.click(await screen.findByTestId("sign-in-button"));
    userEvent.click(await screen.findByTestId("challenge-1"));

    expect(await screen.findByTestId("new-team")).toBeInTheDocument();

    userEvent.type(screen.getByTestId("new-team-name"), "alphaBetaGama");
    userEvent.click(screen.getByTestId("new-team"));

    expect(await screen.findByText("alphaBetaGama")).toBeInTheDocument();
  });
});
