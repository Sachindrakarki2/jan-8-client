import axios from "axios";

const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL;
const userEp = baseApiUrl + "/user";
// register User
export const registerNewUser = async (userData) => {
  try {
    const { data } = await axios.post(userEp, userData);
    return data;
  } catch (error) {
    return {
      staus: "error",
      message: error.message,
    };
  }
};

//login User
export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userEp + "/login", userData);
    return data;
  } catch (error) {
    return {
      staus: "error",
      message: error.message,
    };
  }
};
