import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

const getAll = () => {
  return axios.get(`${BASE_URL}/locaties`);
};

const getOne = (id) => {
  return axios.get(`${BASE_URL}/locatie/${id}`);
};

const postLocatie = () => {};

export default {
  getAll,
  getOne,
  postLocatie,
};
