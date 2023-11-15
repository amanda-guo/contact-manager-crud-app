import axios from "axios";

// TODO: use this as an API client, to be fixed later

const axiosClient = axios.create({
  baseURL: `http://localhost:5000/`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// GET
function getContacts() {
    return axiosClient.get('/contacts');
}

export default {
  axiosClient,
  getContacts
};