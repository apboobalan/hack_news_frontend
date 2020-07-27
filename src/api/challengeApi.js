import axios from "axios";

const URL = "http://localhost:4000";

export const getChallengeDetails = async (id, jwt) => {
  try {
    return await axios.get(`${URL}/api/challenge/${id}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  } catch (error) {
    return { error: "Failed to get Challenge Details. Try Later" };
  }
};

export const getChallengeList = async (jwt, sortByData) => {
  const sortQuery = `?sort=${sortByData.type}`;
  try {
    return await axios.get(`${URL}/api/challenges${sortQuery}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  } catch (error) {
    return { error: "Failed to get challenge list. Try Later." };
  }
};

export const signIn = async (authData) => {
  try {
    const user = await axios.post(`${URL}/api/user/sign_in`, { user: authData });
    return { type: "AUTH_SUCCESS", user: user.data };
  } catch (error) {
    return {
      error: "Failed to sign in. Check if fields are empty or invalid or Try later.",
    };
  }
};

export const signUp = async (authData) => {
  try {
    const user = await axios.post(`${URL}/api/user/sign_up`, { user: authData });
    return { type: "AUTH_SUCCESS", user: user.data };
  } catch (error) {
    return {
      error:
        "Failed to sign up. Check if fields are empty or email without @, min length 5 or already taken or Try later.",
    };
  }
};

export const joinTeam = async (joinData, jwt) => {
  try {
    return await axios.post(`${URL}/api/challenge/team/user`, joinData, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  } catch (error) {
    return {
      error:
        "Failed to join team. You may have already joined the same team or Try later.",
    };
  }
};

export const createTeam = async (createTeamData, jwt) => {
  try {
    return await axios.post(`${URL}/api/challenge/team`, createTeamData, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  } catch (error) {
    return { error: "Failed to create team. Check if fields are empty or Try later." };
  }
};

export const createChallenge = async (newChallengeData, jwt) => {
  try {
    return await axios.post(`${URL}/api/challenge`, newChallengeData, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  } catch (error) {
    return {
      error: "Failed to create challenge. Check if fields are empty or Try Later.",
    };
  }
};
