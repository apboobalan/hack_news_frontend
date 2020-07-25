export const getChallengeDetails = (id) =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          [
            {
              id: 1,
              title: "hacker news front end react",
              description:
                "Develop hackathon website front end in react for the company.",
              tags: [{ name: "react" }, { name: "redux" }, { name: "tailwindcss" }],
              teams: [
                {
                  name: "alpha",
                  members: [
                    { name: "alpha-1" },
                    { name: "alpha-2" },
                    { name: "alpha-3" },
                  ],
                },
                { name: "zeta", members: [{ name: "zeta-1" }, { name: "zeta-2" }] },
              ],
            },
            {
              id: 2,
              title: "hack news back end in react",
              description:
                "Develop hackathon website back end in elixir for the company.",
              tags: [{ name: "elixir" }, { name: "ecto" }, { name: "phoenix" }],
              teams: [
                {
                  name: "alpha",
                  members: [{ name: "alpha-1" }, { name: "alpha-2" }],
                },
                {
                  name: "zeta",
                  members: [{ name: "zeta-1" }, { name: "zeta-2" }, { name: "zeta-3" }],
                },
              ],
            },
          ].find((challenge) => challenge.id === id)
        ),
      500
    )
  );
export const getChallengeList = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
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
        ]),
      500
    )
  );