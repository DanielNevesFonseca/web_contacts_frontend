import axios from "axios";

export const webContactsLocalAPI = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 8 * 1000,
  withCredentials: true
});
