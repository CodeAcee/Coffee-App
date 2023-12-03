import axios from "axios";

const API_KEY = "AIzaSyDeoQXZQtxsbnDqnGaH7YMQLPFHbDjSdTg";

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyDeoQXZQtxsbnDqnGaH7YMQLPFHbDjSdTg`;

  const res = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = res.data.idToken;

  return token;
};

export const createUser = async (email, password) => {
  return await authenticate("signUp", email, password);
  
};

export const login = async (email, password) => {
  return await authenticate("signInWithPassword", email, password);
};