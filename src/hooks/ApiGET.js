import axios from 'axios';

//Used for GET requests from backend.
//WARNING, PULLS ALL DATA FROM BACKEND.
//STORE SENSIBLY. 
const ApiGET = () => {
    const BASE_URL = "http://127.0.0.1:8000/api/";

    const getData = () => {
        axios.get(BASE_URL + 'locaties').then(res => {
            console.log(res.data);
            return res.data || "DEFAULT";
        });
    }    
    return getData();
}

export default ApiGET;