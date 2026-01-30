import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 5000,
    params: {
        requesterId: "99999999-9999-9999-9999-999999999999", // PROVISIONAL
    },
});
