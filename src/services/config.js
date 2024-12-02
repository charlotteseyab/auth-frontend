import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    baseURL,
    withCredentials: true,
    // headers:{
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    // }
});

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });


// create SWR fetcher using api instance
export const fetcher = url => api.get(url).then(res => res.data)

export default api