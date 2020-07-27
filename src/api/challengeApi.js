import axios from "axios";

const URL = "http://localhost:4000";

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
export const getChallengeList = async (jwt) => {
  try {
    return await axios.get(`${URL}/api/challenges`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  } catch (error) {
    console.log("challenge list error");
  }
};

export const signIn = async (authData) => {
  try {
    const user = await axios.post(`${URL}/api/user/sign_in`, { user: authData });
    return { type: "AUTH_SUCCESS", user: user.data };
  } catch (error) {
    return { type: "SIGN_IN_FAILURE" };
  }
};

export const signUp = async (authData) => {
  try {
    const user = await axios.post(`${URL}/api/user/sign_up`, { user: authData });
    return { type: "AUTH_SUCCESS", user: user.data };
  } catch (error) {
    return { type: "SIGN_UP_FAILURE" };
  }
};
