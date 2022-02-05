import { resolvePath } from "react-router-dom";

class LocationService {
  constructor() {}
   getUserLocation() {
    if (!this.isLcationSupported) {
      throw new Error("Location in this browser dose not supported");
    }
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (positionError) => {
          reject(positionError);
        }
      );
    });
    return promise;
  }
  isLcationSupported() {
    return "geolocation" in navigator;
  }
}
export default LocationService;