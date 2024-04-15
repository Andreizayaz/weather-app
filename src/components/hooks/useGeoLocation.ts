import { useEffect, useState } from "react";
import { CoordType } from "src/services/types";

export const useGeoLocation = () => {
  const [coords, setCoords] = useState<CoordType>({ lat: 0, lon: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setCoords({ lat, lon });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return { coords };
};
