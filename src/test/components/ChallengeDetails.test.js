import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import ChallengeDetails from "../../components/ChallengeDetails";

describe("ChallengeDetails", () => {
  test("Render details of a Challenge", () => {
    const challengeDetails = {
      id: 1,
      title: "hacker news front end react",
      description: "Develop hackathon website front end in react for the company.",
      tags: [{name:"react"}, {name:"redux"}, {name:"tailwindcss"}],
      teams: [
        { name: "alpha", members: [{name:"alpha-1"}, {name:"alpha-2"}, {name:"alpha-3"}] },
        { name: "zeta", members: [{name:"zeta-1"}, {name:"zeta-2"}] },
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

  test("Join the team", async ()=>{
    const onClickHandler = jest.fn()
    const challengeDetails = {
      id: 1,
      title: "hacker news front end react",
      description: "Develop hackathon website front end in react for the company.",
      tags: [{name:"react"}, {name:"redux"}, {name:"tailwindcss"}],
      teams: [
        { name: "alpha", members: [{name:"alpha-1"}, {name:"alpha-2"}, {name:"alpha-3"}] },
        { name: "zeta", members: [{name:"zeta-1"}, {name:"zeta-2"}] },
      ],
    };

    render(<ChallengeDetails challengeDetails={challengeDetails} onClickHandler={onClickHandler}/>);

    await userEvent.click(screen.getAllByTestId("join")[0])

    await expect(onClickHandler).toHaveBeenCalledTimes(1)
    await expect(onClickHandler).toBeCalledWith({name: challengeDetails.teams[0].name, challenge_id: challengeDetails.id})

  })
});
