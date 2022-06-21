import axios from 'axios';

//Used to post location data to backend.
//Really needs to be fixed to work with the correct table syntaxes.
const ApiROOM = (props) => {
    const BASE_URL = "http://127.0.0.1:8000/api/";

    axios.post(BASE_URL + 'rooms', { props })
        .then(res => {
            console.log(res.data);
            return res.data;
        }
        ).catch(err => {
            console.log(err);
        }
        );
}

export default ApiROOM;