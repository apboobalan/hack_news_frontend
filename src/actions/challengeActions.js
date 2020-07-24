const getChallengeDetails = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: 1,
          title: "hacker news front end react",
          description: "Develop hackathon website front end in react for the company.",
          tags: [{ name: "react" }, { name: "redux" }, { name: "tailwindcss" }],
          teams: [
            {
              name: "alpha",
              members: [{ name: "alpha-1" }, { name: "alpha-2" }, { name: "alpha-3" }],
            },
            { name: "zeta", members: [{ name: "zeta-1" }, { name: "zeta-2" }] },
          ],
        }),
      1000
    )
  );
  const getChallengeList = () =>
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
  1000
)
);
export const navigateToDetailsAction = (id) => async (dispatch) => {
  const challengeDetails = await getChallengeDetails();
  dispatch({ type: "NAVIGATE_TO_CHALLENGE_DETAILS", challenge: challengeDetails });
};

export const getChallengeListAction = () => async (dispatch) => {
  const challengeList = await getChallengeList()
  dispatch({type: "CHALLENGE_LIST_SUCCESS", challengeList: challengeList})
}
