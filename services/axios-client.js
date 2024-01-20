import axios from "axios";

const SERVER_BASE_URL = "";
const LOCAL_SERVER_URL = "http://127.0.0.1:8080/";

const axiosClient = axios.create({
  baseURL: LOCAL_SERVER_URL,
});

export default axiosClient;
