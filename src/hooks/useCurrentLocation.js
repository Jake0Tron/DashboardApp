import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCurrentLocation(pos.coords);
      },
      (err) => {
        console.error(`ERROR(${err.code}): ${err.message}`);
      }
    );
  }, []);

  return currentLocation;
};

export default useCurrentLocation;
