import axios from "axios";

const URL = "http://localhost:4000";

export const getChallengeDetails = async (id, jwt) => {
  try {
    return await axios.get(`${URL}/api/challenge/${id}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  } catch (error) {
    console.log("challenge details error");
  } 
}

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
