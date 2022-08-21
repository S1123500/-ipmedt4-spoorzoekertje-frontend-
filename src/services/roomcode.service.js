import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

const getRoomcode = () => {
    return axios.get(`${BASE_URL}/roomcode`);
}

const postRoomcode = () =>{
    return axios.post(`${BASE_URL}/roomcode`);
}

export default{getRoomcode, postRoomcode};

