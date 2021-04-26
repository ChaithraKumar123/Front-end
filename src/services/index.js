/* 
The service layer wraps the API calls by creating a centralised axios object that can be reused in different pages. 
An axios object no longer need to be created in the project. All the pages can use the the created functions in api.js which 
encapsules the axios object within it.

*/

import axios from "axios";
//import LocalStorageService from "../services/localStorageService";
import { getCookie } from "../services/cookieService";

class Service {
    constructor() {
        this._axios = this.initialise();
    }
    initialise = () => {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        }
        console.log(headers, process.env.REACT_APP_API_URL);
        let service = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: headers
        })
        service.interceptors.request.use(
            this.handleAuthorization,
            this.handleError,
        )
        return service;
    }
    handleAuthorization = (config) => {
        // const localStorageService = new LocalStorageService();
        // const token = localStorageService.getToken();
        // if (token) {
        //     config.headers['Authorization'] = 'Bearer ' + token;
        // }
        const cookie = getCookie();
        if (cookie && cookie.access_token) {
            config.headers['Authorization'] = 'Bearer ' + cookie.access_token;
        }
        return config;
    }
    handleError = (error) => {
        return Promise.reject(error);
    }
    get(path, param) {
        return this._axios.get(path, { params: param });
    }
    post(path, payload) {
        return this._axios.post(path, payload);
    }
    delete(path, param) {
        return this._axios.delete(path, { params: param });
    }


}

export default Service;