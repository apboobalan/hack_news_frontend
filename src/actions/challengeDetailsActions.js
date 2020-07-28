import { joinTeam, createTeam } from "../api/challengeApi";
import { checkForErrorAndDispatch } from "./infoActions";
import { navigateToDetailsAction } from "./challengeActions";

export const createTeamAction = (createTeamData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const createTeamResponse = await createTeam(createTeamData, jwt);
  checkForErrorAndDispatch(dispatch, createTeamResponse, () =>
    navigateToDetailsAction(createTeamData.challenge_id)(dispatch, getState)
  );
};

export const joinTeamAction = (joinData) => async (dispatch, getState) => {
  const jwt = getState().userReducer.jwt;
  const joinTeamResponse = await joinTeam(joinData, jwt);
  checkForErrorAndDispatch(dispatch, joinTeamResponse, () =>
    navigateToDetailsAction(joinData.challenge_id)(dispatch, getState)
  );
};
