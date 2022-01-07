const axios = require("axios");

const endpointLogin = "http://localhost:5000/users/login";
const endpointSignUp = "http://localhost:5000/users";

export const loginUser = async (values) => {
  console.log("requests first", values);
  try {
    const response = await axios.post(endpointLogin, values);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
export const signupUser = async (values) => {
  //   const payload = JSON.parse(values);
  //   console.log(payload);
  console.log("value is", values);

  try {
    const response = await axios.post(endpointSignUp, values);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
