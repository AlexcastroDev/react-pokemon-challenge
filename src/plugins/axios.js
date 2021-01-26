"use strict";

import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_NOT_SECRET_CODE || "";

axios.defaults.headers.post["Content-Type"] = "application/json";

let config = {
    baseURL: process.env.VUE_APP_baseURL || "",
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

const $api = _axios;

export { $api };