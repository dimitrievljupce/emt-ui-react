import axios from "axios";

const instance = axios.create({
  baseURL: "https://emt-lab2-193185.herokuapp.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
