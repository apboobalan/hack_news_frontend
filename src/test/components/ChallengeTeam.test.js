import React from "react";
import { render, screen } from "@testing-library/react";
import ChallengeTeam from "../../components/ChallengeTeam";

describe("ChallengeTeam", () => {
  test("render team which takes part in a challenge", () => {
    const challengeTeam = {
      name: "alpha",
      members: [{ name: "alpha-1" }, { name: "alpha-2" }, { name: "alpha-3" }],
    };

    render(<ChallengeTeam challengeTeam={challengeTeam} />);

    screen.getByText("alpha");
    screen.getByText("alpha-1");
    screen.getByText("alpha-2");
    screen.getByText("alpha-3");
  });
});
