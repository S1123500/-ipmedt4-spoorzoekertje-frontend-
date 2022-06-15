import { useEffect, useState } from "react";

const useGeolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coords: { lat: "", lng: "" }
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coords: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error
        });
    }

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({ 
                code: 0,
                message: "Geolocation is not available" });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};

export default useGeolocation;
