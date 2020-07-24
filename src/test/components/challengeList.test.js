import React from "react";
import { render, screen } from "@testing-library/react";
import ChallengeList from "../../components/challengeList";
import { withProvider } from "../test_helper";

describe("ChallengeList", () => {
  test("renders challenges with a title", () => {
    let challengeList = [
      {
        id: 1,
        title: "hack news front end in react",
        description: "Build a challenges front end in react",
        tags: [{ name: "react" }, { name: "redux" }],
      },
      {
        id: 2,
        title: "hack news back end in react",
        description: "Build a challenges back end in elixir",
        tags: [{ name: "elixir" }, { name: "ecto" }, { name: "phoenix" }],
      },
    ];

    render(withProvider(<ChallengeList challengeList={challengeList} />));
    screen.getByText("Challenges");
    screen.getByText("hack news front end in react");
    screen.getByText("hack news back end in react");
    screen.getByText("react");
    screen.getByText("redux");
    screen.getByText("elixir");
    screen.getByText("ecto");
    screen.getByText("phoenix");
  });
});
