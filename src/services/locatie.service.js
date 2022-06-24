import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";
//haalt alle locaties op uit de back-end
const getAll = () => {
  return axios.get(`${BASE_URL}/locaties`);
};
//haalt 1 locatie op uit de backend op ID
const getOne = (id) => {
  return axios.get(`${BASE_URL}/locatie/${id}`);
};

const postLocatie = () => {};

export default {
  getAll,
  getOne,
  postLocatie,
};
