export const userData = {
  email: "b@b.b",
  name: "b",
  jwt:
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJoYWNrX25ld3NfYmFja2VuZCIsImV4cCI6MTU5OTMxMTM0MSwiaWF0IjoxNTk2ODkyMTQxLCJpc3MiOiJoYWNrX25ld3NfYmFja2VuZCIsImp0aSI6ImY1ZmYyMjgxLTI2ZjgtNGM2NC04ODk1LWQwNmViNmM1YTVlYiIsIm5iZiI6MTU5Njg5MjE0MCwic3ViIjoiMiIsInR5cCI6ImFjY2VzcyJ9.VI6_3NrEumWNA_vyzeIClwaHeQP1MSv5n-xRgliSjEHcRI5K6lDEaHaXCj9nOaa-gq5TMd93AjQr4CCzV8MElQ",
};

export const challengeListData = [
  {
    created: { email: "a@a.a", name: "a" },
    description: "Build hack news backend in elixir",
    enableUpvote: false,
    id: 1,
    tags: [{ name: "elixir" }, { name: "backend" }, { name: "hacknews" }],
    title: "Elixir backend",
    voted: [
      { email: "b@b.b", name: "b" },
      { email: "c@c.c", name: "c" },
    ],
    votes: 2,
  },
  {
    created: { email: "b@b.b", name: "b" },
    description: "Build hack news front end in react",
    enableUpvote: false,
    id: 2,
    tags: [{ name: "react" }, { name: "frontend" }, { name: "redux" }],
    title: "React frontend",
    voted: [],
    votes: 0,
  },
  {
    created: { email: "b@b.b", name: "b" },
    description: "Build anything",
    enableUpvote: false,
    id: 3,
    tags: [
      { name: "elixir" },
      { name: "react" },
      { name: "ruby" },
      { name: "php" },
      { name: "java" },
    ],
    title: "Hackathon",
    voted: [],
    votes: 0,
  },
];

export const challengeDetailsData = {
  created: { email: "b@b.b", name: "b" },
  description: "Build hack news front end in react",
  enableUpvote: true,
  id: 2,
  tags: [{ name: "react" }, { name: "frontend" }, { name: "redux" }],
  teams: [{ name: "alpha", users: [{ email: "b@b.b", name: "b" }] }],
  title: "React frontend",
  voted: [],
  votes: 0,
};

export const challengeDetailsDataWithAddedTeam = {
  created: { email: "b@b.b", name: "b" },
  description: "Build hack news front end in react",
  enableUpvote: true,
  id: 2,
  tags: [{ name: "react" }, { name: "frontend" }, { name: "redux" }],
  teams: [{ name: "alpha", users: [{ email: "b@b.b", name: "b" }] }, { name: "alphaBetaGama", users: [{ email: "b@b.b", name: "b" }] }],
  title: "React frontend",
  voted: [],
  votes: 0,
};

export const createNewTeamResponseData = {status: "ok"}
