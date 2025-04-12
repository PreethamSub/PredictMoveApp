import axios from "axios";

export const baseURL = "http://localhost:3030/";

export const loginUser = (email, password) => {
  return axios.post(baseURL.concat("users/login"), {
    email: email,
    password: password,
  });
};

export const isAdmin = (token) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  return axios.post(baseURL.concat("users/admin"));
};

export const getAllUsers = (token) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  return axios.get(baseURL.concat("users/all"));
};

export const logoutUser = () => {
  return axios.post(baseURL.concat("users/logout"));
};

export const registerUser = ( data ) => {
  return axios.post(baseURL.concat("users/"), {
    email: data["email"],
    username: data["username"],
    password: data["password1"],
    country: data["country"],
    state: data["state"],
    plan: data["plan"],
  });
};