import axios from "axios";

export const webContactsLocalAPI = axios.create({
  baseURL: "https://localhost:3000",
  timeout: 8 * 1000,
});
