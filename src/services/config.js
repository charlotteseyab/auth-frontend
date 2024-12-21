import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    baseURL,
    withCredentials: true,
});



// create SWR fetcher using api instance
export const fetcher = url => api.get(url).then(res => res.data)

export default api