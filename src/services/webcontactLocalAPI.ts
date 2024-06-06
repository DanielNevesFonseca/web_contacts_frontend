import axios from "axios";

export const webContactsLocalAPI = axios.create({
  baseURL: "https://web-contacts-backend.onrender.com",
  timeout: 8 * 1000,
  withCredentials: true
});
