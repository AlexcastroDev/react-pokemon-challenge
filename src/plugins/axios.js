import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";

axios.defaults.headers.post["Content-Type"] = "application/json";

let config = {
    baseURL: process.env.REACT_APP_BASE_URL || "",
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const $api = _axios;

export { $api };
