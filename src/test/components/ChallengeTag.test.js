import React from "react";
import { render, screen } from "@testing-library/react";
import ChallengeTag from "../../components/ChallengeTag";

describe("ChallengeTag", () => {
  test("renders tag of a challenge", () => {
    let tag = { name: "elixir" };

    render(<ChallengeTag tag={tag} />);

    screen.getByText("elixir");
  });
});
