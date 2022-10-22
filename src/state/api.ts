import axios from "axios";

const apikey = "432e7d2f";

export const axiosInstance = axios.create({
    baseURL: `https://www.omdbapi.com/?apikey=${apikey}`,
});

// don't add await here
// We want to return a promise, not the actual data. 👇
export const fetchMovies = async (movieName: string) => {
    return axiosInstance.get("", {
        params: {
            s: movieName,
        }
    });
};

export const fetchMovie = async (movieId: string) => {
    return axiosInstance.get("", {
        params: {
            i: movieId,
        }
    });
};