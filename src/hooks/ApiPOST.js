import axios from 'axios';
import useGeolocation from './useGeolocation';

//Used to post location data to backend.
//Really needs to be fixed to work with the correct table syntaxes.

const ApiPOST = () => {
    const BASE_URL = "http://127.0.0.1:8000/api/";
    const location = useGeolocation();


    const getLocation = () => {
        if (location.loaded) {
            return [location.coords.lat, location.coords.lng];
        }
    }

    let coords = {
        "lat": getLocation()[0],
        "lng": getLocation()[1]
    }


    axios.post(BASE_URL + 'locaties', { coords })
        .then(res => {
            console.log(res.data);
            return res.data;
        }
        ).catch(err => {
            console.log(err);
        }
        );
}

export default ApiPOST;