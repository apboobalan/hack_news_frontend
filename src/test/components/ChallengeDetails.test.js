import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import ChallengeDetails from "../../components/ChallengeDetails";
import {withProvider} from "../test_helper"

describe("ChallengeDetails", () => {

  const challengeDetails = {
    id: 1,
    title: "hacker news front end react",
    description: "Develop hackathon website front end in react for the company.",
    tags: [{name:"react"}, {name:"redux"}, {name:"tailwindcss"}],
    teams: [
      { name: "alpha", users: [{name:"alpha-1", email: "e1"}, {name:"alpha-2", email: "e2"}, {name:"alpha-3", email: "e3"}] },
      { name: "zeta", users: [{name:"zeta-1", email: "e4"}, {name:"zeta-2", email: "e5"}] },
    ],
  };

  test("Render details of a Challenge", () => {

    render(withProvider(<ChallengeDetails challengeDetails={challengeDetails} />));

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

  test("Join the team", async ()=>{
    const onClickHandler = jest.fn()

    render(withProvider(<ChallengeDetails challengeDetails={challengeDetails} onJoinTeam={onClickHandler}/>));

    await userEvent.click(screen.getAllByTestId("join")[0])

    await expect(onClickHandler).toHaveBeenCalledTimes(1)
    await expect(onClickHandler).toBeCalledWith({name: challengeDetails.teams[0].name, challenge_id: challengeDetails.id})

  })

  test("create a team", async () => {
    const onClickHandler = jest.fn()

    render(withProvider(<ChallengeDetails challengeDetails={challengeDetails} onCreateTeam={onClickHandler}/>));

    screen.getByLabelText("New Team :")
    screen.getByText("NEW TEAM →")
    await userEvent.type(screen.getByTestId("new-team-name"), "Alpha")
    await userEvent.click(screen.getByTestId("new-team"))

    await expect(onClickHandler).toHaveBeenCalledTimes(1)
    await expect(onClickHandler).toBeCalledWith({name: "Alpha", challenge_id: challengeDetails.id}) 
  })
});
