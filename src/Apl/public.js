import axios from "axios";

const axiosSecure = axios.create({
  baseURL:import.meta.VITE_API_URL,
  withCredentials:true
})

export default axiosSecure;


