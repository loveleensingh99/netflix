import axios from 'axios';

// Extract options from ApiOptions
const token = process.env.NEXT_PUBLIC_TMDB_API_KEY
console.log("🚀 ~ token:", token)
export const ApiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    }
};

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: ApiOptions.headers,
});
export const axiosInstance2 = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: ApiOptions.headers,
});

// Export the Axios instance
export default axiosInstance;