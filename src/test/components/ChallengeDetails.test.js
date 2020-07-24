import React from "react";
import { render, screen } from "@testing-library/react";
import ChallengeDetails from "./ChallengeDetails";

describe("ChallengeDetails", () => {
  test("Render details of a Challenge", () => {
    const challengeDetails = {
      title: "hacker news front end react",
      description: "Develop hackathon website front end in react for the company.",
      tags: ["react", "redux", "tailwindcss"],
      teams: [
        { name: "alpha", members: ["alpha-1, alpha-2, alpha-3"] },
        { name: "zeta", members: ["zeta-1", "zeta-2"] },
      ],
    };

    render(<ChallengeDetails challengeDetails={challengeDetails} />);

    screen.getByText("hacker news front end react");
    screen.getByText("Develop hackathon website front end in react for the company.");
    screen.getByText("react");
    screen.getByText("redux");
    screen.getByText("tailwindcss");
    screen.getByText("alpha");
    screen.getByText("alpha-1");
    screen.getByText("alpha-2");
    screen.getByText("alpha-3");
    screen.getByText("zeta");
    screen.getByText("zeta-1");
    screen.getByText("zeta-2");
  });
});
