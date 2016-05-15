import axios from 'axios';

// enable cors on server http://stackoverflow.com/questions/29114667/cross-orgin-communication-between-nginx-and-spark-java

export const FETCH_BIKE_SYSTEMS = 'FETCH_BIKE_SYSTEMS';
export const FETCH_BIKE_SYSTEM = 'FETCH_BIKE_SYSTEM';
export const FETCH_STATIONS = 'FETCH_STATIONS';
export const SYSTEM_SELECTED = 'SELECT_SYSTEM';

//const ROOT_URL = 'http://45.55.157.6:8080'; // digital ocean
//const ROOT_URL = 'http://192.168.99.100:8080'; // docker
const ROOT_URL = 'http://localhost:8080'; // localhost

export function fetchBikeSystems() {
  const request = axios.get(`${ROOT_URL}/api/v1/bikesystems`);
  return {
    type: FETCH_BIKE_SYSTEMS,
    payload: request
  };
}

export function fetchBikeSystem(id) {
  const request = axios.get(`${ROOT_URL}/api/v1/bikesystem/${id}`);
  return {
    type: FETCH_BIKE_SYSTEM,
    payload: request
  };
}

export function fetchStations(id) {
  const request = axios.get(`${ROOT_URL}/api/v1/stations/${id}`);
  return {
    type: FETCH_STATIONS,
    payload: request
  };
}

export function selectSystem(system) {
  return {
    type: SYSTEM_SELECTED,
    payload : system
  };
}

