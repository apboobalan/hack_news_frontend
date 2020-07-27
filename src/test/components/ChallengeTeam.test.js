import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
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
  describe("join the team", () => {
    test("join team", () => {
      const challengeTeam = {
        name: "alpha",
        members: [{ name: "alpha-1" }, { name: "alpha-2" }, { name: "alpha-3" }],
      };

      render(<ChallengeTeam challengeTeam={challengeTeam} />);

      screen.getByText("JOIN");
    });

    test("on click of the join button call the onClickHandler with the name of the team", async() => {
      const onClickHandler = jest.fn()
      const challengeTeam = {
        name: "alpha",
        members: [{ name: "alpha-1" }, { name: "alpha-2" }, { name: "alpha-3" }],
      };

      render(<ChallengeTeam challengeTeam={challengeTeam} onClickHandler={onClickHandler} />);

      await userEvent.click(screen.getByTestId("join"));

      await expect(onClickHandler).toHaveBeenCalledTimes(1);
      await expect(onClickHandler).toBeCalledWith({name: challengeTeam.name})
    })
  });
});
